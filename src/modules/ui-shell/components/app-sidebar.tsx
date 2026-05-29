import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/modules/core/components/design-system/sidebar"
import { Search, Settings2 } from "lucide-react"
import { AppSidebarHeader } from "./app-sidebar-header"
import { NavFooter } from "./nav-footer"
import { NavMain } from "./nav-main"
import { NavNotes } from "./nav-notes"

const data = {
  navMain: [
    {
      title: "Search",
      icon: Search,
      action: () => alert("Search"),
    },
  ],
  navFooter: [
    {
      title: "Settings",
      icon: Settings2,
      action: () => alert("Settings"),
    },
  ],
  favorites: [
    {
      name: "My Notes",
      emoji: "📊",
      action: () => alert("My Notes"),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <AppSidebarHeader />
        <NavMain items={data.navMain} />
      </SidebarHeader>

      <SidebarContent className="gap-0">
        <NavNotes notes={data.favorites} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={data.navFooter} />
      </SidebarFooter>
    </Sidebar>
  )
}
