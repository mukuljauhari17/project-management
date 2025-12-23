"use client";

import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "../../ui/sidebar";
import { NavMain } from "./nav-main";

export const AppSidebar = () => {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className=" border-r">
      {/* ---------- Header / Logo ---------- */}
      <SidebarHeader className="bg-white border-b">
        <div className="flex justify-center">
          {state === "expanded" ? (
            <img
              src="/logo-dark.jpg"
              alt="Client Logo"
              className="w-[160px] rounded-md"
            />
          ) : (
            <Image
              src="/logo-sm.webp"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          )}
        </div>
      </SidebarHeader>

      {/* ---------- Content ---------- */}
      <SidebarContent className="flex flex-col">
        <NavMain />
      </SidebarContent>
    </Sidebar>
  );
};
