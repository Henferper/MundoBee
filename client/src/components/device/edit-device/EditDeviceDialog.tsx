"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { SubmitButton } from "../shared/SubmitButton";
import { DeviceDialog } from "../shared/DeviceDialog";
import { BaseDeviceForm } from "../shared/BaseDeviceForm";
import { CancelButton } from "../shared/CancelButton";
import { useEditDeviceForm } from "./useEditDeviceForm";
import { FormProvider } from "react-hook-form";
import { IsOnSwitch } from "../shared/IsOnSwitch";
import { Device } from "@/types";

interface EditDeviceDialogProps {
  device?: Device;
}

export default function EditDeviceDialog({ device }: EditDeviceDialogProps) {
  const [open, setOpen] = useState(false);

  const form = useEditDeviceForm(device);

  const onSubmit = form.handleSubmit(async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    form.reset();
    setOpen(false);
  });

  const handleDialogChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      form.reset();
    }
  };

  return (
    <FormProvider {...form}>
    <DeviceDialog
      trigger={<Button size="sm" variant="outline">Editar</Button>}
      title="Editar dispositivo"
      onSubmit={onSubmit}
      open={open}
      onOpenChange={handleDialogChange}
    >
      <BaseDeviceForm/>
      <IsOnSwitch />
      <div className="flex gap-3 pt-10 justify-end">
          <CancelButton onClick={() => setOpen(false)}>Cancelar</CancelButton>
          <SubmitButton>Salvar</SubmitButton>
      </div>
    </DeviceDialog>
  </FormProvider>
  );
}