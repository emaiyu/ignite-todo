import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useTodo } from "@/hooks/todo";
import { cn } from "@/lib/utils";
import { Todo } from "@/models/todo";
import { TrashIcon } from "lucide-react";

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggle, remove } = useTodo();

  return (
    <Card className="flex flex-row bg-foreground/50 border-none text-white p-4">
      <CardHeader className="p-0 mr-2">
        <Checkbox
          checked={todo.completed}
          onClick={() => toggle(todo.id)}
          className="rounded-xl w-4 h-4 data-[state='unchecked']:border-primary p-0"
        />
      </CardHeader>
      <CardContent
        className="flex-1 p-0 cursor-pointer"
        onClick={() => toggle(todo.id)}
      >
        <p className={cn("text-sm", todo.completed && "line-through")}>
          {todo.content}
        </p>
      </CardContent>
      <CardFooter className="p-0">
        <Button
          className="bg-transparent hover:bg-transparent hover:text-destructive p-0 cursor-pointer h-auto"
          onClick={() => remove(todo.id)}
        >
          <TrashIcon className="h-4 w-4" />
          <span className="sr-only">Deletar tarefa</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
