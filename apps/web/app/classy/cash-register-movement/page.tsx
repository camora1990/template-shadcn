"use client";
import { Amount } from "@/components/amount/amount.component";
import { ButtonDepositMoney } from "@/containers/cash-register-movement/components/modal-deposit-money/modal-deposit-money";
import { ButtonWithdrawMoney } from "@/containers/cash-register-movement/components/modal-withdraw-money/modal-withdraw-money";
import { TransactionList } from "@/containers/cash-register-movement/components/transaction-list";
import { Button } from "@classy/ui/components/button";
import { SelectField } from "@classy/ui/components/molecules/select-field";

export default function CashRegisterMovementPage() {
  return (
    <>
      <div className="flex justify-between items-center w-full mb-4 flex-wrap gap-4 sm:justify-center sm:flex-col md:flex-row md:justify-between">
        <div className="flex items-center space-x-4">
          <Button className="flex-shrink-0">Cierre de Caja</Button>
          <SelectField
            onChange={(value) => console.log(value)}
            defaultValue="main"
            options={[
              { value: "main", label: "Caja Principal" },
              { value: "secondary", label: "Caja Secundaria" },
              { value: "emergency", label: "Caja de Emergencia" },
            ]}
            placeholder="Seleccione una caja"
          />
        </div>
        <div className="flex items-center space-x-2 flex-wrap">
          <Button>Fecha</Button>
          <Button>{"<"}</Button>
          <Button>{">"}</Button>
          <Button>Hoy</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-min gap-4 w-full">
        <Amount amount="$45,231.89" title="Total ingresos" />
        <Amount amount="$45,231.89" title="Total retiros" />
        <Amount amount="$45,231.89" title="Total efectivo en caja" />
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
        <ButtonDepositMoney />
        <ButtonWithdrawMoney />
      </div>
      <div className="overflow-auto borde">
        <TransactionList />
      </div>
    </>
  );
}
