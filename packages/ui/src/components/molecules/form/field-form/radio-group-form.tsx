"use client";
import { ComponentPropsWithoutRef } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form";
import { RadioGroup, RadioGroupItem } from "@classy/ui/components/radio-group";
import { FormFieldClassy, Options } from "@classy/ui/models/index";
import { FieldValues } from "react-hook-form";

type GroupProps = ComponentPropsWithoutRef<typeof RadioGroup>;

interface RadioGroupProps<T extends FieldValues>
  extends Omit<GroupProps, "name" | "defaultValue">,
    FormFieldClassy<T> {
  optionValues: Options[];
}

export const RadioGroupForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  optionValues,
  ...radioGroupProps
}: RadioGroupProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          {label && <FormLabel className="text-base">{label}</FormLabel>}
          {description && <FormDescription>{description}</FormDescription>}
          <FormControl>
            <RadioGroup
              {...radioGroupProps}
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {optionValues.map((item) => (
                <FormItem
                  key={item.value}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
