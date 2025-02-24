"use client";
import { Checkbox } from "@classy/ui/components/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@classy/ui/components/form";
import { FormFieldClassy } from "@classy/ui/models/field.models";
import { ComponentPropsWithoutRef } from "react";

import { FieldValues } from "react-hook-form";

type CheckboxProps = ComponentPropsWithoutRef<typeof Checkbox>;

interface CheckboxFormProps<T extends FieldValues>
  extends Omit<CheckboxProps, "name" | "defaultValue">,
    FormFieldClassy<T> {}

export const CheckboxForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  ...checkboxProps
}: CheckboxFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow ${className}`}
        >
          <FormControl>
            <Checkbox
              {...checkboxProps}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            {label && <FormLabel>{label}</FormLabel>}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
        </FormItem>
      )}
    />
  );
};
