"use client";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldClassy, Options } from "@classy/ui/models/index";
import { Checkbox } from "@classy/ui/components/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form";

type MultiCheckboxProps = ComponentPropsWithoutRef<typeof Checkbox>;

interface MultiCheckProps<T extends FieldValues>
  extends Omit<MultiCheckboxProps, "name" | "defaultValue">,
    FormFieldClassy<T> {
  optionValues: Options[];
}
export const MultiCheckBoxForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  optionValues,
  ...multiProps
}: MultiCheckProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            {label && <FormLabel className="text-base">{label}</FormLabel>}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          {optionValues.map((item) => (
            <FormField
              key={item.value}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row optionValues-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        {...multiProps}
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== item.value
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
