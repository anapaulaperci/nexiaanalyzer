import { BookOpen, MessageSquare, Home } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Tutorial", url: "/dashboard/tutorial", icon: BookOpen },
  { title: "Prompts para Personas", url: "/dashboard/prompts", icon: MessageSquare },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return currentPath === "/dashboard"
    }
    return currentPath.startsWith(path)
  }
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-glow" 
      : "hover:bg-accent hover:text-accent-foreground transition-colors duration-200"

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-card/50 backdrop-blur-sm border-r border-border/50">
        <SidebarGroup>

          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navegação
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/dashboard"}
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}