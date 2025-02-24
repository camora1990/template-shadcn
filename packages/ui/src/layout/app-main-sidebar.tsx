"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@classy/ui/components/sidebar";

import { HeadersSwitcher } from "@classy/ui/layout/header-switcher";
import { NavMain } from "@classy/ui/layout/nav-main";
import { NavUser } from "@classy/ui/layout/nav-user";
import { Header, NavItem, User } from "@classy/ui/models/nav-main.model";

interface SidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: User;
  navMain: NavItem[];
  header: Header;
}

export function AppMainSidebar({
  user,
  navMain,
  header,
  ...props
}: SidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <HeadersSwitcher header={header} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
