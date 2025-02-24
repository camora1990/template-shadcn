"use client";
import { Button } from "@classy/ui/components/button";
import { ClassyForm } from "@classy/ui/components/molecules/form/classy-form";
import { InputForm } from "@classy/ui/components/molecules/form/field-form/input-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

interface UserFormData {
  email: string;
  password: string;
}

const UserFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const LoginForm = () => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },

    mode: "all",
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full">
        <ClassyForm form={form} onSubmit={form.handleSubmit((data) => {})}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>

          <InputForm
            type="email"
            placeholder="Email"
            control={form.control}
            name="email"
          />
          <InputForm
            type="password"
            placeholder="Password"
            control={form.control}
            name="password"
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </ClassyForm>
      </div>
    </div>
  );
};
