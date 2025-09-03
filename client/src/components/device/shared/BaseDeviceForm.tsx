"use client";
import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { newDeviceType } from "../new-device/validator";
import { useFormContext, UseFormReturn } from "react-hook-form";


const PRESET_OPTIONS = [
  { value: "apis-mellifera", label: "Apis mellifera" },
  { value: "apis-cerana", label: "Apis cerana" },
  { value: "apis-dorsata", label: "Apis dorsata" },
  { value: "apis-florea", label: "Apis florea" },
  { value: "custom", label: "Personalizado" },
];

export const BaseDeviceForm = () => {
  const form = useFormContext();

  const { errors } = form.formState;

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input
                placeholder="Colmeia BEEthoven"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preset"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Predefinição</FormLabel>
            <Select
              onValueChange={field.onChange}
              value={field.value} // Use value instead of defaultValue
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma predefinição" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {PRESET_OPTIONS.map((preset) => (
                  <SelectItem key={preset.value} value={preset.value}>
                    {preset.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};