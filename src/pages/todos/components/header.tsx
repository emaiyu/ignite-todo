import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodo } from "@/hooks/todo";
import { PlusCircleIcon, RocketIcon } from "lucide-react";
import React from "react";

export function Header() {
  const { add } = useTodo();
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <header className="bg-foreground/95 relative  w-full flex flex-col items-center justify-center py-16">
      <div className="inline-flex items-center gap-2">
        <RocketIcon className="h-6 w-6 text-secondary" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
          todo
        </h1>
      </div>

      <nav className="px-8 container inline-flex items-center gap-2 max-w-6xl absolute -bottom-4">
        <Input
          placeholder="Adicione uma tarefa"
          className="bg-foreground/95 text-white ring-0 focus-visible:ring-0 py-5"
          ref={inputRef}
        />
        <Button
          onClick={() => {
            if (!inputRef?.current?.value) return;
            add(inputRef.current?.value);
            inputRef.current.value = "";
          }}
          className="py-5"
        >
          <span className="hidden md:block">Criar</span>
          <PlusCircleIcon className="h-4 w-4 " />
          <span className="sr-only">Criar nova tarefa</span>
        </Button>
      </nav>
    </header>
  );
}
