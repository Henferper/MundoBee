import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

interface SubmitButtonProps {
  children: ReactNode;
}

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { formState: { isSubmitting, isValid, isDirty } } = useFormContext();

  return (
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
        children
      )}
    </Button>
  );
};