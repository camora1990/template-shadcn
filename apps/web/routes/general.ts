export const tempRoutes = {
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
        logo: "GalleryVerticalEnd",
        plan: "Pro",
      },
      {
        name: "Sede 2",
        logo: "AudioWaveform",
        plan: "Periodo de prueba",
      },
      {
        name: "Sede 3",
        logo: "Command",
        plan: "Gratis",
      },
    ],
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: "SquareChartGanttIcon",
      isActive: true,
      items: [],
    },
    {
      title: "Administración",
      url: "#",
      icon: "HandCoinsIcon",
      isActive: true,
      items: [
        {
          title: "Caja",
          url: "/admin/cash-register-movement",
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
      icon: "BadgeDollarSignIcon",
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
      icon: "CalendarClockIcon",
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
      icon: "Settings2",
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
      icon: "ChartLineIcon",
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
