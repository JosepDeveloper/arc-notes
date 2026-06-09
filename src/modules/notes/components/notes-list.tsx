import { Separator } from "@/modules/core/components/design-system/separator"
import { NoteItem } from "./note-item"

const notesMock = [
  {
    title: "Project Architecture",
    description: "Define feature-based modules, shared UI components, and data access boundaries.",
    createdAt: new Date("2026-06-09T10:00:00Z"),
  },
  {
    title: "Meeting Notes",
    description: "Reviewed authentication flow, note syncing, and offline-first requirements.",
    createdAt: new Date("2026-06-08T14:30:00Z"),
  },
  {
    title: "CS2 Practice Routine",
    description: "15 min aim training, 20 min DM, 5 Premier matches, review demos afterward.",
    createdAt: new Date("2026-06-06T20:15:00Z"),
  },
  {
    title: "Shopping List",
    description: "Coffee beans, monitor arm, USB-C cable, keyboard switches, desk mat.",
    createdAt: new Date("2026-06-04T18:45:00Z"),
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
