import { Button } from "#/components/ui/button";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import { Bold, Italic } from "@yoopta/marks";
import Paragraph from "@yoopta/paragraph";
import { useEffect, useState } from "react";
import { ulid } from "ulid";

export const Route = createFileRoute("/")({
  component: Home,
});

const plugins = [Paragraph];
const marks = [Bold, Italic];

function Editor() {
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    setEditor(createYooptaEditor({ plugins, marks, value: undefined }));

  }, []);


  useEffect(() => {
    console.log("Editor instance:", editor);
  }, [editor]);

  console.log("YooptaEditor loaded");

  if (!editor) return null;

  return (
    <YooptaEditor
      editor={editor}
      onChange={(value) => console.log(value)}
      style={{
        paddingBottom: 100
      }}
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

      <ClientOnly fallback={<p>Cargando</p>}>
        <Editor />
      </ClientOnly>
    </div>
  );
}