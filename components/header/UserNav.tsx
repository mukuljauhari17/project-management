import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from 'next/link';

import { useRouter, useParams } from "next/navigation";import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
;

const UserNav = () => {
   
    const router = useRouter();
    const { clientId } = useParams<{ clientId: string }>();
      // 🧪 Mock user
  const mockUser = {
    name: "Yash Saxena",
    email: "yash.saxena@example.com",
    avatarUrl: "", // leave empty to test initials fallback
    // avatarUrl: "https://i.pravatar.cc/150?img=12",
  };

    const handleLogout = () => {
    };
    return (
        <React.Fragment>
            <Popover>
                <PopoverTrigger asChild>
                    <button>
                        {mockUser?.avatarUrl ? (
                            <img
                                src={mockUser.avatarUrl}
                                alt="Profile Avatar"
                                className="h-9 w-9 rounded-full border"
                            />
                        ) : (
                            // ✨ Fallback avatar with initials
                            <div className="h-9 w-9 rounded-full border bg-gradient-to-r from-[#424794] to-[#a2bf62] flex items-center justify-center text-white text-lg font-semibold">
                                {mockUser?.name
                                    ?.split(" ")
                                    .map((n: any) => n[0])
                                    .join("")
                                    .toUpperCase() || "U"}
                            </div>
                        )}
                    </button>
                </PopoverTrigger>

                <PopoverContent className="flex flex-col items-center gap-3 w-56">
                    <Link
                        href="/profile"
                        className="mb-2 w-full flex flex-col items-center"
                    >
                        {mockUser?.avatarUrl ? (
                            <img
                                src={mockUser.avatarUrl}
                                alt="Profile Avatar"
                                className="h-14 w-14 rounded-full border object-cover"
                            />
                        ) : (
                            // ✨ Fallback avatar with initials
                            <div className="h-14 w-14 rounded-full border bg-gradient-to-r from-[#424794] to-[#a2bf62] flex items-center justify-center text-white text-lg font-semibold">
                                {mockUser?.name
                                    ?.split(" ")
                                    .map((n: any) => n[0])
                                    .join("")
                                    .toUpperCase() || "U"}
                            </div>
                        )}
                        <h2 className="text-lg font-semibold">{mockUser?.name}</h2>
                        <p className="text-sm text-muted-foreground">{mockUser?.email}</p>
                    </Link>
                    <Separator />
                    <Button variant="outline" className="w-full" onClick={handleLogout}>
                        Sign Out
                    </Button>
                </PopoverContent>
            </Popover>
        </React.Fragment>
    )
}

export default UserNav