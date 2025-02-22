export type NavItem = {
  title: string;
  url: string;
  isActive?: boolean; // Opcional, ya que no todos los elementos lo tienen
};

export type NavSection = {
  title: string;
  url: string;
  items: NavItem[];
};

export type NavMain = NavSection[];

export type HeadersMenu = {
  title: string;
  items: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
};
