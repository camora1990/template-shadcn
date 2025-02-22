import { Control, FieldValues, Path } from "react-hook-form";
export interface FormFieldClassy<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  description?: string;
  control: Control<T>;
}

export type Options = { value: string; label: string };
