import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/modules/core/components/design-system/sidebar"
import { type LucideIcon } from "lucide-react"

export function NavMain({
  items,
}: {
  items: {
    title: string
    icon: LucideIcon
    isActive?: boolean
    action?: () => void
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={item.isActive}
            onClick={item.action}
            className="cursor-pointer"
          >
            <div>
              <item.icon />
              <span>{item.title}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
