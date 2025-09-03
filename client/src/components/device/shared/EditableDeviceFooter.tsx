import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

interface DeviceFooterProps {
  onCancel: () => void;
}

export function EditableDeviceFooter({ onCancel }: DeviceFooterProps) {
  const { formState: { isSubmitting, isValid, isDirty } } = useFormContext();

  return (
        <div className="flex gap-3 pt-10 justify-end">
    <Button
      disabled={isSubmitting}
      onClick={onCancel}
      variant="outline"
      className="w-32 bg-secondary py-2 rounded-md"
    >
      Cancelar
    </Button>
     <Button
      type="submit"
      disabled={isSubmitting || !isValid || !isDirty}
      className="submit-button w-32 bg-primary text-secondary py-2 rounded-md"
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin mr-2"></div>
        </div>
      ) : (
        "Salvar"
      )}
    </Button>
    </div>
  )

}