"use client";

import { Table } from "@classy/ui/components/molecules/data-table/table";
import {
  Invoice,
  useCreateInvoiceColumn,
} from "../hooks/use-create-invoice-columns";
const invoices: Invoice[] = [
  {
    invoiceNumber: "FAC001",
    date: "2025-02-01",
    action: "Ingreso",
    concept: "Venta de producto",
    category: "Ventas",
    amount: "$500.00",
  },
  {
    invoiceNumber: "FAC002",
    date: "2025-02-02",
    action: "Retiro",
    concept: "Pago de servicios",
    category: "Servicios",
    amount: "$200.00",
  },
  {
    invoiceNumber: "FAC003",
    date: "2025-02-03",
    action: "Ingreso",
    concept: "Devolución de cliente",
    category: "Devoluciones",
    amount: "$150.00",
  },
  {
    invoiceNumber: "FAC004",
    date: "2025-02-04",
    action: "Retiro",
    concept: "Compra de insumos",
    category: "Compras",
    amount: "$300.00",
  },
  {
    invoiceNumber: "FAC005",
    date: "2025-02-05",
    action: "Ingreso",
    concept: "Venta de servicio",
    category: "Servicios",
    amount: "$400.00",
  },
];

export const TransactionList = () => {
  const { columns } = useCreateInvoiceColumn();
  return (
    <>
      <h2 className="text-lg font-bold mb-4 text-center">
        MOVIMIENTOS DE CAJAS DESDE EL ULTIMO CIERRE
      </h2>
      <Table
        filterFields={[{ id: "invoiceNumber", label: "Número de Factura" }]}
        data={invoices}
        columns={columns}
      />
    </>
  );
};
