"use client";
import { Button } from "@classy/ui/components/button";
import { DialogFooter } from "@classy/ui/components/dialog";
import { DialogCommon } from "@classy/ui/components/molecules/Dialog/dialog-commond";
import { ClassyForm } from "@classy/ui/components/molecules/form/classy-form";
import { CheckboxForm } from "@classy/ui/components/molecules/form/field-form/checkbox-form";
import { InputForm } from "@classy/ui/components/molecules/form/field-form/input-form";
import { toast } from "@classy/ui/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  age: z.coerce.number().min(18, {
    message: "You must be at least 18 years old.",
  }),
  prueba: z.boolean(),
});

type UserFormData = z.infer<typeof UserSchema>;

export const ButtonWithdrawMoney = () => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    defaultValues: {},

    mode: "all",
  });

  const onSubmit = (data: UserFormData) => {
    console.log("Form data submitted:", data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-black">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    form.reset({
      username: "Holi",
      age: 18,
    });
  };
  return (
    <DialogCommon
      title={"Retiro"}
      triggerLabel="Retirar"
      triggerVariant={"secondary"}
      description="Mollit ea irure aliqua id."
    >
      <ClassyForm form={form} onSubmit={onSubmit}>
        <InputForm
          control={form.control}
          name="username"
          label="User name"
          placeholder="Ingrese nombre"
          type="text"
        />
        <InputForm control={form.control} name="age" />
        <CheckboxForm
          control={form.control}
          name="prueba"
          label="Use different settings for my mobile devices"
          description="You can manage your mobile notifications in the"
        />
        <DialogFooter>
          <Button className="w-32 h-12" type="submit">
            Guardar
          </Button>
        </DialogFooter>
      </ClassyForm>
    </DialogCommon>
  );
};
