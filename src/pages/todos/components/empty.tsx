import { ClipboardListIcon } from "lucide-react";

export function Empty() {
  return (
    <div className="text-sm text-gray-500/80 gap-4 font-bold flex flex-col justify-center items-center py-16">
      <ClipboardListIcon className="h-14 w-14" strokeWidth={1.4} />
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">Voce ainda tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
