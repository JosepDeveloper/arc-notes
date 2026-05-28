import { Button } from "@/modules/core/components/design-system/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/modules/core/components/design-system/card"
import { createFileRoute } from "@tanstack/react-router"
import { FileQuestion, House, Undo2 } from "lucide-react"

export const Route = createFileRoute("/$404")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] px-6 text-[#1d1d1f] dark:bg-[#111113] dark:text-[#f5f5f7]">
      <Card className="w-full max-w-xl rounded-[32px] border border-black/5 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/30">
        <CardHeader className="space-y-6 p-8 pb-0">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300 shadow-inner shadow-yellow-500/20 dark:bg-yellow-400">
              <FileQuestion className="size-7 text-black" />
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Arc Notes</p>

              <h1 className="text-2xl font-semibold tracking-tight">not found</h1>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 p-8">
          <div className="rounded-3xl border border-black/5 bg-[#fffefb] p-6 dark:border-white/10 dark:bg-[#1a1a1d]">
            <p className="text-7xl font-bold tracking-[-0.08em] text-black/90 dark:text-white">
              404
            </p>

            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              The page or note you are trying to access doesn&apos;t exist.
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 border-t border-black/5 p-8 pt-6 dark:border-white/10 sm:flex-row">
          <Button asChild className="h-12 flex-1 rounded-2xl text-sm font-medium">
            <a href="/">
              <House className="mr-2 size-4" />
              Go back home
            </a>
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={() => window.history.back()}
            className="h-12 flex-1 rounded-2xl text-sm font-medium"
          >
            <Undo2 className="mr-2 size-4" />
            Previous page
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
