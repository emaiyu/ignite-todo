import { useTodo } from "@/hooks/todo";
import { Header } from "@/pages/todos/components/header";
import { Statistics } from "@/pages/todos/components/statistics";
import { TodoItem } from "@/pages/todos/components/todo-item";
import { Separator } from "@radix-ui/react-separator";
import { Empty } from "./components/empty";

export function Todos() {
  const { todos, total } = useTodo();

  return (
    <section className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex bg-foreground/90 flex-1 w-full h-full py-10 justify-center">
        <section className="px-8 container max-w-6xl flex flex-col gap-6">
          <Statistics />
          <Separator className="opacity-50" />
          {!(total > 0) && <Empty />}
          {total > 0 &&
            todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </section>
      </main>
    </section>
  );
}
