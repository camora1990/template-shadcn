"use client";
import { cleanNumberString } from "@/lib/format/format-number-string";
import { Button } from "@classy/ui/components/button";
import { ClassyForm } from "@classy/ui/components/molecules/form/classy-form";
import { CheckboxForm } from "@classy/ui/components/molecules/form/field-form/checkbox-form";
import { ComboboxForm } from "@classy/ui/components/molecules/form/field-form/combobox-form";
import { DatePickerForm } from "@classy/ui/components/molecules/form/field-form/date-picker-form";
import { InputForm } from "@classy/ui/components/molecules/form/field-form/input-form";
import { MultiCheckBoxForm } from "@classy/ui/components/molecules/form/field-form/multi-checkbox-form";
import { NumericInputForm } from "@classy/ui/components/molecules/form/field-form/numeric-input-form";
import { RadioGroupForm } from "@classy/ui/components/molecules/form/field-form/radio-group-form";
import { SelectForm } from "@classy/ui/components/molecules/form/field-form/select-form";
import { SwitchForm } from "@classy/ui/components/molecules/form/field-form/switch-form";
import { TextareaForm } from "@classy/ui/components/molecules/form/field-form/textarea-form";
import { toast } from "@classy/ui/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Función para limpiar la cadena de texto (elimina símbolos no numéricos)
const UserSchema = z.object({
  inputText: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  inputNumber: z
    .string()
    .transform((value, ctx) => {
      const cleanedValue = cleanNumberString(value); // Limpia la cadena
      const numericValue = parseFloat(cleanedValue); // Convierte a número

      // Si el valor no es un número válido, agrega un error de validación
      if (isNaN(numericValue)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Debe ser un número válido",
        });
        return z.NEVER; // Detiene la validación
      }

      return numericValue; // Devuelve el número convertido
    })
    .refine((value) => !isNaN(value), {
      message: "Debe ser un número válido", // Mensaje de error personalizado
    })
    .refine((value) => value !== undefined, {
      message: "Required", // Mensaje de error para campo requerido
    }),
  checkbox: z.boolean(),
  multiCheck: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  radioGroup: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  select: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  datePicker: z.date({
    required_error: "A date of birth is required.",
  }),
  switch: z.boolean().default(false),
  textarea: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  file: z
    .instanceof(File)
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      { message: "Invalid document file type" }
    )
    .optional(),
  combobox: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type UserFormData = {
  inputText: string;
  inputNumber: number;
  checkbox: boolean;
  multiCheck: string[];
  datePicker: Date;
  radioGroup: string;
  select: string;
  switch: boolean;
  textarea: string;
  file?: File;
  combobox: string;
};
export default function Page() {
  const form = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      inputText: "",
      inputNumber: 18,
      checkbox: true,
      multiCheck: ["option1"],
      select: "option1",
      switch: false,
      datePicker: new Date(),
      radioGroup: "option1",
    },

    mode: "all",
  });

  const onSubmit = (data: UserFormData) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <div className="">
      <ClassyForm form={form} onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 p-2">
          <InputForm
            control={form.control}
            name="inputText"
            label="Input Text"
            placeholder="Input"
            description="This is a description"
            type="text"
          />
          <NumericInputForm
            control={form.control}
            name="inputNumber"
            label="Input Number"
            description="This is a numeric input field."
            placeholder="Enter a number"
            allowNegative={false}
            thousandSeparator={true}
            prefix="$ "
            valueIsNumericString={false}
          />
          <CheckboxForm
            control={form.control}
            name="checkbox"
            label="CheckboxForm"
            description="Voluptate eu minim consectetur irure anim consectetur consequat commodo."
          />
          <MultiCheckBoxForm
            control={form.control}
            name="multiCheck"
            label="MultiCheckBoxForm"
            optionValues={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
            description="Voluptate eu minim consectetur irure anim consectetur consequat commodo."
          />
          <DatePickerForm
            control={form.control}
            name="datePicker"
            label="DatePickerForm"
            description="Voluptate eu minim consectetur irure anim consectetur consequat commodo."
          />
          <RadioGroupForm
            control={form.control}
            name="radioGroup"
            label="Radio Group"
            description="Voluptate eu minim consectetur irure anim consectetur consequat commodo."
            optionValues={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
          />
          <SelectForm
            control={form.control}
            name="select"
            label="Select"
            description="Voluptate eu minim consectetur irure anim consectetur consequat commodo."
            optionValues={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
          />
          <SwitchForm
            control={form.control}
            name="switch"
            label="SwitchForm"
            description="Voluptate eu minim consectetur irure anim consectetur consequat commodo."
          />
          <TextareaForm
            control={form.control}
            name="textarea"
            label="Input Text Area"
            placeholder="Input Text Area"
            description="Esse id voluptate ipsum nulla cupidatat amet minim est fugiat dolore eiusmod quis."
          />
          <InputForm
            type="file"
            control={form.control}
            name="file"
            label="Input File"
            placeholder="Input field"
            description="Esse id voluptate ipsum nulla cupidatat amet minim est fugiat dolore eiusmod quis."
          />
          <ComboboxForm
            control={form.control}
            name="combobox"
            label="combobox"
            description="Voluptate eu minim consectetur irure anim consectetur consequat commodo."
            setValue={form.setValue}
            optionValues={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
          />
        </div>

        <div className="flex justify-center mt-5">
          <Button className="w-32 h-12" type="submit">
            Guardar
          </Button>
        </div>
      </ClassyForm>
    </div>
  );
}
