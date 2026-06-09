import { Separator } from "@/modules/core/components/design-system/separator"
import { NoteItem } from "./note-item"

const notesMock = [
  {
    title: "Project Architecture",
    description: "Define feature-based modules, shared UI components, and data access boundaries.",
    createdAt: Temporal.Now.instant(),
  },
  {
    title: "Meeting Notes",
    description: "Reviewed authentication flow, note syncing, and offline-first requirements.",
    createdAt: Temporal.Now.instant().subtract({ days: 1 }),
  },
  {
    title: "CS2 Practice Routine",
    description: "15 min aim training, 20 min DM, 5 Premier matches, review demos afterward.",
    createdAt: Temporal.Now.instant().subtract({ days: 3 }),
  },
  {
    title: "Shopping List",
    description: "Coffee beans, monitor arm, USB-C cable, keyboard switches, desk mat.",
    createdAt: Temporal.Now.instant().subtract({ days: 5 }),
  },
]

export function NotesList() {
  return (
    <section>
      <ul className="flex flex-col ">
        {notesMock.map((note) => (
          <li key={note.title}>
            <NoteItem {...note} className="p-4" />
            <Separator />
          </li>
        ))}
      </ul>
    </section>
  )
}
