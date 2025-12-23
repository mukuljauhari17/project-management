"use client";

import { Search, Settings } from "lucide-react";
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
    <nav className="w-full flex items-center justify-between px-4 py-[11px] bg-transparent border-b shadow-sm">
      <div className="flex items-center gap-2 w-1/2">
        <SidebarTrigger /> {/* Added trigger here */}
        <div className="relative w-full max-w-sm">
          <Input
            type="text"
            placeholder="Search for ..."
            className="w-full pl-10 pr-3 h-10 focus:border-[#a2bf62]"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>
      {/* Right: theme, settings, bell, avatar */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="ghost" size="icon" asChild>
          <Link href="/settings">
            <Settings className="h-8 w-8" />
          </Link>
        </Button>

        {/* Notification with badge */}
        {/* <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6" />
          </Button>
          {notificationCount > 0 && (
            <span className="absolute top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
              {notificationCount}
            </span>
          )}
        </div> */}

        <UserNav />
      </div>
    </nav>
  );
};
