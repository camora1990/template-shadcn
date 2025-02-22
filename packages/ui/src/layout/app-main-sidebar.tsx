"use client";

import * as React from "react";
import {
  AudioWaveform,
  BadgeDollarSignIcon,
  BookOpen,
  Bot,
  CalendarClockIcon,
  ChartLine,
  ChartLineIcon,
  Command,
  Frame,
  GalleryVerticalEnd,
  HandCoinsIcon,
  Map,
  PieChart,
  Settings2,
  SquareChartGanttIcon,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@classy/ui/components/sidebar";

import { NavMain } from "@classy/ui/layout/nav-main";
import { NavUser } from "@classy/ui/layout/nav-user";
import { HeadersSwitcher } from "@classy/ui/layout/header-switcher";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  header: {
    title: "Sedes",
    items: [
      {
        name: "Sede 1",
        logo: GalleryVerticalEnd,
        plan: "Pro",
      },
      {
        name: "Sede 2",
        logo: AudioWaveform,
        plan: "Periodo de prueba",
      },
      {
        name: "Sede 3",
        logo: Command,
        plan: "Gratis",
      },
    ],
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareChartGanttIcon,
      isActive: true,
      items: [],
    },
    {
      title: "Administración",
      url: "#",
      icon: HandCoinsIcon,
      isActive: true,
      items: [
        {
          title: "Caja",
          url: "/classy/cash-register-movement",
        },
        {
          title: "Inventario",
          url: "#",
        },
        {
          title: "Gastos",
          url: "#",
        },
        {
          title: "Clientes",
          url: "#",
        },
        {
          title: "Sueldos y comisiones",
          url: "#",
        },
      ],
    },
    {
      title: "Facturación electronica",
      url: "#",
      icon: BadgeDollarSignIcon,
      isActive: true,
      items: [
        {
          title: "Facturación",
          url: "#",
        },
        {
          title: "Pagos péndientes",
          url: "#",
        },
      ],
    },
    {
      title: "Agendamiento",
      url: "#",
      icon: CalendarClockIcon,
      items: [
        {
          title: "Servicios",
          url: "#",
        },
        {
          title: "Agendas",
          url: "#",
        },
        {
          title: "Calendario",
          url: "#",
        },
      ],
    },
    {
      title: "Configuración",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Usuarios y permisos",
          url: "#",
        },
        {
          title: "Mi centro",
          url: "#",
        },
      ],
    },
    {
      title: "Estadisticas",
      url: "#",
      icon: ChartLineIcon,
      items: [
        {
          title: "Citas",
          url: "#",
        },
        {
          title: "Agendas",
          url: "#",
        },
        {
          title: "Servicios",
          url: "#",
        },
        {
          title: "Clientes",
          url: "#",
        },
        {
          title: "Inventarios",
          url: "#",
        },
        {
          title: "Sueldos y comisiones",
          url: "#",
        },
      ],
    },
  ],
};

export function AppMainSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <HeadersSwitcher header={data.header} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
