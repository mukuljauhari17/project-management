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
    <Sidebar collapsible="icon" className=" border-r ">
      {/* ---------- Header / Logo ---------- */}
      <SidebarHeader
        className="bg-white  border-b dark:bg-[rgb(19_35_55/1)]"
       
      >
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
              width={80}
              height={80}
              className="rounded-md mt-[14px]"
            />
          )}
        </div>
      </SidebarHeader>

      {/* ---------- Content ---------- */}
      <SidebarContent className="flex flex-col bg-background dark:bg-[rgb(19_35_55/1)]">
        <NavMain />
      </SidebarContent>
    </Sidebar>
  );
};
