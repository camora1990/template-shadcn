"use client";
import { ComponentPropsWithoutRef } from "react";
import { Switch } from "@classy/ui/components/switch";
import { FieldValues } from "react-hook-form";
import { FormFieldClassy } from "@classy/ui/models/field.models";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@classy/ui/components/form";

type SwitchProps = ComponentPropsWithoutRef<typeof Switch>;

interface SwitchFormProps<T extends FieldValues>
  extends Omit<SwitchProps, "name" | "defaultValue">,
    FormFieldClassy<T> {}

export const SwitchForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  ...switchProps
}: SwitchFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <div className="space-y-0.5">
            {label && <FormLabel>{label}</FormLabel>}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormControl>
            <Switch
              {...switchProps}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
