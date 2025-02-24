"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form";
import { Input } from "@classy/ui/components/input";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { FormFieldClassy } from "@classy/ui/models/index";

export type NumericTextFieldProps = ComponentPropsWithoutRef<typeof Input> & {
  allowNegative?: boolean;
  thousandSeparator?: boolean;
  prefix: string;
  valueIsNumericString: boolean;
};

interface NumericInputFormProps<T extends FieldValues>
  extends Omit<NumericTextFieldProps, "name" | "defaultValue">,
    FormFieldClassy<T> {}

export const NumericInputForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  ...inputProps
}: NumericInputFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <NumericFormat
              {...inputProps}
              {...field}
              type="text"
              customInput={Input}
              className={className}
              allowNegative={false}
              thousandSeparator={true}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
