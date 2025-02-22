"server";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./data-table.js";
import { useDataTable } from "./hook/use-data-table.js";
import { DataTableFilterField } from "./types/index.js";

interface TableProps<TData, TValue> {
  filterFields: DataTableFilterField<TData>[];
  data: TData[];
  columns: ColumnDef<TData, TValue>[];

  pageCount?: number;
  pagination?: boolean;
}

export function Table<TData, TValue>({
  filterFields,
  data,
  columns,
  pageCount = 10,
  pagination = true,
}: TableProps<TData, TValue>) {
  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: false,
    initialState: {
      columnPinning: { right: ["actions"] },
    },
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <>
      <DataTable requiredPagination={pagination} table={table}></DataTable>
    </>
  );
}
