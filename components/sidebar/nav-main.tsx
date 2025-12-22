"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import {
  CheckSquare,
  ClipboardList,
  LayoutDashboard,
  ListTodo,
  Settings,
  Users,
  LogOut,
  Home,
  File,
  GitGraph,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

export const NavMain = () => {
  const { setOpenMobile } = useSidebar();
  const { clientId, workspaceId } = useParams<{
    clientId: string;
    workspaceId: string;
  }>();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === `/${clientId}${href}`;

  const mainItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: ListTodo,
    },
    {
      label: "Kanban Board",
      href: "/kanban-board",
      icon: LayoutDashboard,
    },
    {
      label: "Documents",
      href: "/documents",
      icon: File,
    },
    {
      label: "Analytics",
      href: "/add-members",
      icon: BarChart,
    },
  ];

  return (
    <SidebarGroup className="flex h-full flex-col">
      <SidebarMenu className="space-y-3 ml-2">
        {mainItems.map((el) => (
          <SidebarMenuItem key={el.label}>
            <SidebarMenuButton
              asChild
              tooltip={el.label}
              className={`px-3 py-2 rounded-lg transition-colors
    ${
      isActive(el.href)
        ? "bg-blue-50 text-blue-600"
        : "text-muted-foreground hover:bg-gray-100"
    }
  `}
            >
              <Link
                href={`/${clientId}${el.href}`}
                onClick={() => setOpenMobile(false)}
                className="flex items-center"
              >
                <el.icon
                  className={`mr-2 h-6 w-6 ${
                    isActive(el.href) ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span className="font-semibold">{el.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      {/* ---------- Bottom Section ---------- */}
      <div className="mt-auto pt-4 border-t">
        <SidebarMenu className="space-y-2 ml-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link
                href={`/${clientId}/settings`}
                onClick={() => setOpenMobile(false)}
              >
                <Settings className="mr-2 h-6 w-6" />
                <span className="font-semibold">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Log out"
              className="text-red-500 hover:text-red-600"
              onClick={() => {
                // logout logic
                console.log("logout");
              }}
            >
              <LogOut className="mr-2 h-6 w-6" />
              <span className="font-semibold">Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
    </SidebarGroup>
  );
};
