import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form.js";
import { Textarea } from "@classy/ui/components/textarea.js";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldClassy } from "../field.models.js";

type TextareaProps = ComponentPropsWithoutRef<typeof Textarea>;

interface TextareaFormProps<T extends FieldValues>
  extends Omit<TextareaProps, "name" | "defaultValue">,
    FormFieldClassy<T> {}

export const TextareaForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  ...inputProps
}: TextareaFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea {...inputProps} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
