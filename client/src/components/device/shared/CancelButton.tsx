import { useFormContext } from "react-hook-form";
import { Button } from "../../ui/button";import { ReactNode } from "react";
''

interface CancelButtonProps {
  onClick: () => void;
  children: ReactNode;
}


export const CancelButton = ({ onClick, children }: CancelButtonProps) => {
  const { formState: { isSubmitting } } = useFormContext();

  return (
    <Button
      disabled={isSubmitting}
      onClick={onClick}
      variant="outline"
      className="w-32 bg-secondary py-2 rounded-md "
    >
      {children}
    </Button>
  );
};
