import { Separator } from "@/modules/core/components/design-system/separator"
import { NotesList } from "./notes-list"

type Props = {
  className?: string
}

export function NotesSidebar({ className }: Props) {
  return (
    <section className={className}>
      <header className="h-14 flex flex-col font-semibold">
        <div className="h-full p-4">
          <h2 className="text-muted-foreground">My Notes</h2>
        </div>

        <Separator className="mt-auto" />
      </header>

      <NotesList />
    </section>
  )
}
