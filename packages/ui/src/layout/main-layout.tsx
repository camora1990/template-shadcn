import React from "react";

import { Separator } from "@classy/ui/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@classy/ui/components/sidebar";
import { AppMainSidebar } from "@classy/ui/layout/app-main-sidebar.js";
import { NavMain } from "@classy/ui/models/nav-main.model";
import { ModeToggle } from "@classy/ui/theme/mode-toggle";

interface MainLayoutProps {
  navMain: NavMain;
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Readonly<MainLayoutProps>) => {
  return (
    <SidebarProvider>
      <AppMainSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between px-4 py-2 bg-primary shadow-md">
          <div className="flex items-center gap-2 px- h-full">
            <SidebarTrigger className="ml-1 text-white" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <ModeToggle />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-2 items-center">
          <div className="w-full max-w-[90vw]">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
