"use client";

import { ReactNode, Suspense } from "react";

import { Toaster } from "@classy/ui/components/toaster";
import "@classy/ui/globals.css";
import { ThemeProvider } from "@classy/ui/theme/themeProvider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        <NuqsAdapter>{children}</NuqsAdapter>

        <Toaster />
      </ThemeProvider>
    </Suspense>
  );
}
