import { redirect } from "next/navigation";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarContainer } from "@/components/layout/sidebar/app-sidebar-container"
import { Header } from "@/components/layout/header/header";




interface Props {
  children: React.ReactNode;
  params: Promise<{ workspaceId: string }>;
}

const WorkspaceIdlayout = async ({ children, params }: Props) => {
 


  return (
      <SidebarProvider>
        <div className="w-full flex bg-background h-screen">
          <AppSidebarContainer />
          <main className="w-full overflow-y-auto min-h-screen  ">
            <Header />
            <div className="p-0 md:p-4 pt-2 ">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
  )
};

export default WorkspaceIdlayout;
