"server"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@classy/ui/components/select";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: SelectOption[];
  placeholder?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

export function SelectField({
  options,
  placeholder,
  onChange,
  defaultValue,
}: SelectFieldProps) {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder || "Select an option"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
