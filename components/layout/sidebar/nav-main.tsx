"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../ui/sidebar";
import {
  LayoutDashboard,
  ListTodo,
  LogOut,
  Home,
  File,
  BarChart,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const NavMain = () => {
  const { setOpenMobile } = useSidebar();
  const { clientId } = useParams<{ clientId: string; workspaceId: string }>();
  const pathname = usePathname();
  const isActive = (href: string) => pathname.endsWith(href);

  const mainItems = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Projects", href: "/projects", icon: ListTodo },
    { label: "Kanban Board", href: "/kanban-board", icon: LayoutDashboard },
    { label: "Documents", href: "/documents", icon: File },
    { label: "Analytics", href: "/add-members", icon: BarChart },
  ];

  return (
    <SidebarGroup className="flex h-full flex-col">
      {/* ---------- Main Menu ---------- */}
      <SidebarMenu className="space-y-3">
        {mainItems.map((el) => (
          <SidebarMenuItem key={el.label}>
            <SidebarMenuButton
              asChild
              tooltip={el.label}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive(el.href)
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-700 dark:text-blue-100"
                  : "text-muted-foreground hover:bg-gray-100 dark:text-muted-foreground dark:hover:bg-gray-800"
              }`}
            >
              <Link
                href={el.href}
                onClick={() => setOpenMobile(false)}
                className="flex items-center"
              >
                <el.icon
                  className={`mr-2 h-6 w-6 ${
                    isActive(el.href)
                      ? "text-blue-700 dark:text-blue-100"
                      : "text-gray-500 dark:text-gray-400"
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
        <SidebarMenu className="space-y-2">
          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname.endsWith("/settings")
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-700 dark:text-blue-100"
                  : "text-muted-foreground hover:bg-gray-100 dark:text-muted-foreground dark:hover:bg-gray-800"
              }`}
            >
              <Link
                href="/settings"
                onClick={() => setOpenMobile(false)}
                className="flex items-center"
              >
                <Settings
                  className={`mr-2 h-6 w-6 ${
                    pathname.endsWith("/settings")
                      ? "text-blue-700 dark:text-blue-100"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                <span className="font-semibold">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Log out */}
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Log out"
              className="text-red-500 hover:text-red-600"
              onClick={() => {
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
