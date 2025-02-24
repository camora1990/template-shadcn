export * from "@classy/ui/models/field.models";
export * from "@classy/ui/models/nav-main.model";

import type { ColumnSort } from "@tanstack/react-table";

export type StringKeyOf<TData> = Extract<keyof TData, string>;

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  count?: number;
}
export interface DataTableFilterField<TData> {
  id: StringKeyOf<TData>;
  label: string;
  placeholder?: string;
  options?: Option[];
}

export interface ExtendedColumnSort<TData> extends Omit<ColumnSort, "id"> {
  id: StringKeyOf<TData>;
}

export type ExtendedSortingState<TData> = ExtendedColumnSort<TData>[];
