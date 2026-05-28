import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/modules/core/components/design-system/sidebar"
import { VersionSwitcher } from "./version-switcher"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent className="gap-0">{null}</SidebarContent>
    </Sidebar>
  )
}
