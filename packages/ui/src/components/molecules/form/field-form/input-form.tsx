import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form";
import { Input } from "@classy/ui/components/input";
import { FormFieldClassy } from "@classy/ui/models/field.models";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues } from "react-hook-form";


type InputProps = ComponentPropsWithoutRef<typeof Input>;

interface InputFormProps<T extends FieldValues>
  extends Omit<InputProps, "name" | "defaultValue">,
    FormFieldClassy<T> {}

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
