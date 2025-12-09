
const generateMockMetrics = () => {
  const metrics = [];
  const now = new Date();

  for (let i = 0; i < 24; i++) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);

    metrics.push({
      timestamp: timestamp.toISOString(),

      // Entradas / Saídas
      inCount: Math.floor(100 + Math.random() * 50),
      outCount: Math.floor(80 + Math.random() * 50),

      // Temperaturas (°C)
      temperature: 32 + Math.random() * 3,
      outsideTemp: 28 + Math.random() * 4,
      externalTemp: 27 + Math.random() * 5,

      // Umidade (%)
      humidity: 60 + Math.random() * 8,
      outsideHumidity: 50 + Math.random() * 10,
      externalHumidity: 55 + Math.random() * 12,

      // Peso (kg)
      weight: 25 + Math.random(),

      // CO₂ (ppm)
      co2: 400 + Math.random() * 80,
      co2External: 380 + Math.random() * 60,

      // Som / Vibração
      sound: 35 + Math.random() * 10,
      vibration: 3 + Math.random() * 2,

      // Ruído (dB)
      noise: 40 + Math.random() * 8,
      enclosureNoise: 35 + Math.random() * 8,
      externalNoise: 45 + Math.random() * 8,

      // Peltier (°C)
      peltierHot: 60 + Math.random() * 4,
      peltierCold: 10 + Math.random() * 2,
    });
  }

  // Ordena do mais antigo → mais novo
  return metrics.reverse();
};

export const mockMetrics = generateMockMetrics();
