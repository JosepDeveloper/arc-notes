import { Button } from "#/components/ui/button";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import { Bold, Italic } from "@yoopta/marks";
import Paragraph from "@yoopta/paragraph";
import { useMemo } from "react";
import { ulid } from "ulid";

export const Route = createFileRoute("/")({
  component: Home,
});

const plugins = [Paragraph];
const marks = [Bold, Italic];

function Editor() {
  const editor = useMemo(
    () => createYooptaEditor({ plugins, marks }),
    []
  );

  return (
    <YooptaEditor
      editor={editor}
      onChange={(value) => console.log(value)}
      placeholder="Type something..."
    />
  );
}

function Home() {
  console.log(ulid())
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>

      <Button>Click me</Button>

      <ClientOnly fallback={<div style={{ minHeight: 200 }} />}>
        <Editor />
      </ClientOnly>
    </div>
  );
}