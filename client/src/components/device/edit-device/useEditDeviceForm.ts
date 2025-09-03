import { useForm } from "react-hook-form";
import { editDeviceSchema, EditDeviceType } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";

export const useEditDeviceForm = () => {
  const form = useForm<EditDeviceType>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(editDeviceSchema),
  });

  return form;
};
