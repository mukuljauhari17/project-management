"use client";

import { Bell, Search, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import UserNav from "./UserNav";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/common/site-theme/theme-toggle";

export const Header = () => {
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-[13px] bg-transparent border-b shadow-sm dark:bg-[rgb(19_35_55/1)]">
      <div className="flex items-center gap-2 w-1/2">
        <SidebarTrigger /> {/* Added trigger here */}
      </div>
      {/* Right: theme, settings, bell, avatar */}
      <div className="flex items-center gap-3">
        {/* Search icon */}
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>

        <ThemeToggle />


        {/* Notification with badge */}
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6" />
          </Button>
          {notificationCount > 0 && (
            <span className="absolute top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
              2
            </span>
          )}
        </div>

        <UserNav />
      </div>
    </nav>
  );
};
