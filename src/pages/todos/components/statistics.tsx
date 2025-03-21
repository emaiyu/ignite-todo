import { useTodo } from "@/hooks/todo";

export function Statistics() {
  const { total, completed } = useTodo();

  return (
    <div className="w-full inline-flex justify-between items-center">
      <p className="text-sm text-secondary font-bold">
        Tarefas criadas{" "}
        <span className="bg-foreground/20 px-2 py-1 rounded-full text-white">
          {total}
        </span>
      </p>
      <p className="text-sm text-secondary font-bold">
        Concluídas{" "}
        <span className="bg-foreground/20 px-2 py-1 rounded-full text-white">
          {completed} de {total}
        </span>
      </p>
    </div>
  );
}
