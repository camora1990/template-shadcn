import { ComponentPropsWithoutRef } from "react";
import { Calendar } from "@classy/ui/components/calendar.js";
import { FieldValues } from "react-hook-form";
import { FormFieldClassy } from "../field.models.js";
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
import { Button } from "@classy/ui/components/button.js";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns/format";
import { cn } from "@classy/ui/lib/utils.js";

type CalendarProps = ComponentPropsWithoutRef<typeof Calendar>;

interface DatePickerProps<T extends FieldValues>
  extends Omit<CalendarProps, "name" | "defaultValue" | "mode">,
    FormFieldClassy<T> {
  placeHolder?: string;
}

export const DatePickerForm = <T extends FieldValues>({
  control,
  name,
  label,
  placeHolder,
  description,
  ...calendarProps
}: DatePickerProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel>{label}</FormLabel>}

          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{placeHolder ?? "Seleccione una fecha"}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                {...calendarProps}
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
