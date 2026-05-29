import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  type SidebarGroup,
} from "@/modules/core/components/design-system/sidebar"
import { type LucideIcon } from "lucide-react"

export function NavFooter({
  items,
}: {
  items: {
    title: string
    icon: LucideIcon
    badge?: React.ReactNode
    action?: () => void
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton onClick={item.action} className="cursor-pointer">
              <div>
                <item.icon />
                <span>{item.title}</span>
              </div>
            </SidebarMenuButton>
            {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  )
}
