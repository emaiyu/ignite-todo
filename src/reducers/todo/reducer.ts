import { Todo } from "@/models/todo";
import { ActionType } from "./action";

interface State {
  todos: Todo[];
}

type Payload = Partial<Todo>;

interface Action {
  type: ActionType;
  payload: Payload;
}

export function todoReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.ADD: {
      const id = Date.now().toString();
      const todos = [
        ...state.todos,
        { id, completed: false, content: action.payload.content! },
      ];

      return {
        ...state,
        todos,
      };
    }
    case ActionType.REMOVE: {
      const id = action.payload.id;
      const todos = state.todos.filter((todo) => todo.id !== id);

      return {
        ...state,
        todos,
      };
    }
    case ActionType.TOGGLE: {
      const id = action.payload.id;

      const todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos,
      };
    }
    default:
      return state;
  }
}
