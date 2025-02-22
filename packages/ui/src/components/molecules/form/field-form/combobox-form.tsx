"use client";
import React from "react";
import { Button } from "@classy/ui/components/button.js";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@classy/ui/components/command.js";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@classy/ui/components/popover.js";
import { cn } from "@classy/ui/lib/utils.js";
import { Check, ChevronsUpDown } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { FormFieldClassy, Options } from "../field.models.js";

type ComboboxProps = ComponentPropsWithoutRef<typeof Command>;

interface ComboboxFormFormProps<T extends FieldValues>
  extends Omit<ComboboxProps, "name" | "defaultValue">,
    FormFieldClassy<T> {
  optionValues: Options[];
  setValue: UseFormSetValue<T>;
  placeHolder?: string;
}

export const ComboboxForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeHolder,
  optionValues,
  setValue,
  ...comboProps
}: ComboboxFormFormProps<T>) => {
  const [buttonWidth, setButtonWidth] = React.useState<number>();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const getButtonWidth = React.useCallback(() => {
    if (buttonRef.current) {
      const width = buttonRef.current.getBoundingClientRect().width;
      setButtonWidth(width);
    }
  }, []);
  React.useEffect(() => {
    getButtonWidth();
    window.addEventListener("resize", getButtonWidth);
    return () => {
      window.removeEventListener("resize", getButtonWidth);
    };
  }, []);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          {label && <FormLabel>{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                ref={buttonRef}
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? optionValues.find((items) => items.value === field.value)
                        ?.label
                    : (placeHolder ?? "Seleccione una opción")}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Buscar..." className="h-9" />
                <CommandList>
                  <CommandEmpty style={{ width: buttonWidth }}>
                    No se encontraron resultados.
                  </CommandEmpty>
                  <CommandGroup style={{ width: buttonWidth }}>
                    {optionValues.map((item) => (
                      <CommandItem
                        value={item.label}
                        key={item.value}
                        onSelect={() => {
                          setValue(name, item.value as PathValue<T, Path<T>>, {
                            shouldValidate: true,
                          });
                        }}
                      >
                        {item.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            item.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
