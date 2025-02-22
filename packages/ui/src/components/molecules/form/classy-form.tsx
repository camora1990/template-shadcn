"use client";

import { Form } from "@classy/ui/components/form";
import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import { z, ZodType } from "zod";

interface ClassyFormProps<T extends ZodType<any, any, any>> {
  form: UseFormReturn<z.infer<T>>;
  children: ReactNode;
  onSubmit: (data: z.infer<T>) => void;
  className?: string;
}

export function ClassyForm<T extends ZodType<any, any, any>>({
  form,
  children,
  onSubmit,
  className,
}: ClassyFormProps<T>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {children}
      </form>
    </Form>
  );
}
