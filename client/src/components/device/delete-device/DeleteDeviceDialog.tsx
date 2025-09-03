"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Device } from "@/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";

interface DeleteDeviceDialogProps {
  device?: Device;
}

export default function DeleteDeviceDialog({ device }: DeleteDeviceDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsOpen(false);
    } catch (error) {
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive">
          Excluir
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Excluir dispositivo</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja excluir o dispositivo &quot;{device?.name}&quot;? Esta ação não pode ser desfeita e todos os dados associados serão perdidos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
            <Button
              disabled={isDeleting}
              variant="destructive"
              onClick={handleDelete}
              className="w-20"
            >
              {isDeleting ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                "Excluir"
              )}
            </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}