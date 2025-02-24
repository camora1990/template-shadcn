import { tempRoutes } from "@/routes";
import { SidebarProvider } from "@classy/ui/components/sidebar";
import { MainLayout } from "@classy/ui/layout/main-layout";

export default function ClassyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      {<MainLayout navMain={tempRoutes}>{children}</MainLayout>}
    </SidebarProvider>
  );
}
