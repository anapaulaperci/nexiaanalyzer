import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b border-border/50 bg-card/30 backdrop-blur-sm px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold bg-gradient-hero bg-clip-text text-transparent">
                Dashboard de Personas Sintéticas
              </h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}