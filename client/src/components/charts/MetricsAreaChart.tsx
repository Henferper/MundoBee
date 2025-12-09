"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface MetricsAreaChartProps {
  data: any[];
  categories: string[];
  index: string;
  title?: string;
  valueFormatter?: (v: any) => string;
}

export function MetricsAreaChart({
  data = [],
  categories,
  index,
  title,
  valueFormatter,
}: MetricsAreaChartProps) {
  // Transforma os dados em séries que o Apex consegue ler
  const series = categories.map((cat) => ({
    name: cat,
    data: data.map((item) => ({
      x: item[index],
      y: item[cat],
    })),
  }));

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: 300,
      toolbar: { show: false },
      fontFamily: "Inter, sans-serif",
    },

    stroke: {
      curve: "smooth",
      width: 2.5,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.4,
        opacityFrom: 0.3,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },

    dataLabels: { enabled: false },

    grid: { strokeDashArray: 4, borderColor: "#e3e3e3" },

    xaxis: {
      type: "datetime",
      labels: {
        style: { colors: "#888", fontSize: "11px" },
      },
    },

    yaxis: {
      labels: {
        formatter: (value: number) =>
          valueFormatter ? valueFormatter(value) : String(value),
        style: {
          colors: "#94A3B8",
          fontSize: "12px",
        },
      },
    },

    legend: {
      position: "top",
      markers: { radius: 12 },
    },

    tooltip: {
      theme: "light",
      x: { format: "dd/MM HH:mm" },
      y: {
        formatter: (val: any) => (valueFormatter ? valueFormatter(val) : val),
      },
    },

    colors: ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7"],
  };

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm dark:bg-neutral-900">
      {title && (
        <h2 className="mb-2 text-lg font-medium text-neutral-700 dark:text-neutral-200">
          {title}
        </h2>
      )}

      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
}
