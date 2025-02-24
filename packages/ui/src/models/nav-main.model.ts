interface User {
  name: string;
  email: string;
  avatar: string;
}

interface HeaderItem {
  name: string;
  logo: string;
  plan: string;
}

interface Header {
  title: string;
  items: HeaderItem[];
}

interface NavItem {
  title: string;
  url: string;
  icon: string;
  isActive?: boolean;
  items: SubNavItem[];
}

interface SubNavItem {
  title: string;
  url: string;
}

interface SidebarModel {
  user: User;
  header: Header;
  navMain: NavItem[];
}

export type { Header, HeaderItem, NavItem, SidebarModel, SubNavItem, User };
