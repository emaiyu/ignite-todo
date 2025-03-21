import { TodoProvider } from "./contexts/todo";
import { Todos } from "./pages/todos";

export function App() {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
}
