"use client";
import { ColumnDef } from "@tanstack/react-table";

export interface Invoice {
  invoiceNumber: string;
  date: string;
  action: "Ingreso" | "Retiro";
  concept: string;
  category: string;
  amount: string;
}

import React from "react";

export const useCreateInvoiceColumn = () => {
  const columns: ColumnDef<Invoice>[] = [
    {
      id: "invoiceNumber",
      header: "Número de Factura",
      accessorKey: "invoiceNumber",
    },
    {
      id: "date",
      header: "Fecha",
      accessorKey: "date",
      cell: ({ row }) => {
        return new Date(row.original.date).toLocaleDateString("es-ES");
      },
    },
    {
      id: "action",
      header: "Tipo",
      accessorKey: "action",
      cell: ({ row }) => {
        return (
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              row.original.action === "Ingreso"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {row.original.action}
          </span>
        );
      },
    },
    {
      id: "concept",
      header: "Concepto",
      accessorKey: "concept",
    },
    {
      id: "category",
      header: "Categoría",
      accessorKey: "category",
    },
    {
      id: "amount",
      header: "Monto",
      accessorKey: "amount",
      cell: ({ row }) => {
        return (
          <span
            className={`font-medium ${
              row.original.action === "Ingreso"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {row.original.amount}
          </span>
        );
      },
    },
  ];

  return { columns };
};
