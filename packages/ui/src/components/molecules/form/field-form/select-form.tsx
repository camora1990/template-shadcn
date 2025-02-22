import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@classy/ui/components/form.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@classy/ui/components/select.js";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldClassy, Options } from "../field.models.js";

type SelectProps = ComponentPropsWithoutRef<typeof Select>;

interface SelectFormProps<T extends FieldValues>
  extends Omit<SelectProps, "name" | "defaultValue">,
    FormFieldClassy<T> {
  optionValues: Options[];
  placeHolder?: string;
}

export const SelectForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeHolder,
  optionValues,
  ...selectProps
}: SelectFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          {label && <FormLabel className="text-base">{label}</FormLabel>}
          <Select
            {...selectProps}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  placeholder={placeHolder ?? "Seleccione una opción"}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {optionValues.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
