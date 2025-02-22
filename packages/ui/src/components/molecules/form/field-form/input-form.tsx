import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form.js";
import { Input } from "@classy/ui/components/input.js";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldClassy } from "../field.models.js";

type InputProps = ComponentPropsWithoutRef<typeof Input>;

interface InputFormProps<T extends FieldValues>
  extends Omit<InputProps, "name" | "defaultValue">, FormFieldClassy<T> {
}

export const InputForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  ...inputProps
}: InputFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...inputProps} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
