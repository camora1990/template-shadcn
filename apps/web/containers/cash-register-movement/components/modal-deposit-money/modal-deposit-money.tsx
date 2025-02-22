"use client";
import { Button } from "@classy/ui/components/button";
import { DialogClose, DialogFooter } from "@classy/ui/components/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@classy/ui/components/form";
import { Input } from "@classy/ui/components/input";
import { DialogCommon } from "@classy/ui/components/molecules/Dialog/dialog-commond";
import { ClassyForm } from "@classy/ui/components/molecules/form/classy-form";
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
});

type UserFormData = z.infer<typeof UserSchema>;

export const ButtonDepositMoney = () => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      age: 18,
    },
    mode:"all"
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
  };

  console.log({ errors: form.formState.errors });
  return (
    <DialogCommon
      title={"Ingresar"}
      triggerLabel="Ingresar"
      description="Mollit ea irure aliqua id."
    >
      <ClassyForm form={form} onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="bombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Edad</FormLabel>
              <FormControl>
                <Input placeholder="edad" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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
