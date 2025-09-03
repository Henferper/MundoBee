"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { useNewDeviceForm } from "./useNewDeviceForm";
import { SubmitButton } from "../shared/SubmitButton";
import { DeviceDialog } from "../shared/DeviceDialog";
import { BaseDeviceForm } from "../shared/BaseDeviceForm";
import { CancelButton } from "../shared/CancelButton";
import { FormProvider } from "react-hook-form";

export default function NewDeviceDialog() {
  const [open, setOpen] = useState(false);

  const form = useNewDeviceForm();

  const onSubmit = form.handleSubmit(async (data) => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      form.reset();
      setOpen(false);

  });

  const handleDialogChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        form.reset();
      }, 300);
    }
  };

  return (
    <FormProvider {...form}>
    <DeviceDialog
      trigger={<Button>Adicionar dispositivo</Button>}
      title="Novo dispositivo"
      description="Escolha um nome para sua colmeia e selecione uma predefinição para configurar o dispositivo."
      onSubmit={onSubmit}
      open={open}
      onOpenChange={handleDialogChange}
    >
      <BaseDeviceForm/>
      <div className="flex gap-3 pt-10 justify-end">
          <CancelButton onClick={() => setOpen(false)}>Cancelar</CancelButton>
          <SubmitButton>Salvar</SubmitButton>
      </div>
    </DeviceDialog>
  </FormProvider>
  );
}