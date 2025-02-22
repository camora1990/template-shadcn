"server"
import { Button, buttonVariants } from "@classy/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@classy/ui/components/dialog";
import { VariantProps } from "class-variance-authority";

interface DialogCommonProps {
  children: React.ReactNode;
  title: string;
  description: string;
  triggerLabel: string;
  triggerVariant?: VariantProps<typeof buttonVariants>["variant"];
  openChange?: (isOpen: boolean) => void;
}

export function DialogCommon({
  children,
  title,
  description,
  triggerLabel,
  triggerVariant,
  openChange,
}: DialogCommonProps) {
  return (
    <Dialog
      modal={true}
      onOpenChange={(isOpen) => console.log({ open: isOpen })}
    >
      <DialogTrigger asChild>
        <Button className="w-32 h-12" variant={triggerVariant}>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
