import { SidebarGroupLabel, SidebarMenu } from "@/modules/core/components/design-system/sidebar"
import { NotepadTextIcon } from "lucide-react"

export function AppSidebarHeader() {
  return (
    <SidebarMenu>
      <SidebarGroupLabel className="h-auto px-2 py-2">
        <div className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
            <NotepadTextIcon className="size-4" />
          </div>

          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-medium text-foreground">Arc Notes</span>
            <span className="text-muted-foreground">Local-first notes</span>
          </div>
        </div>
      </SidebarGroupLabel>
    </SidebarMenu>
  )
}
