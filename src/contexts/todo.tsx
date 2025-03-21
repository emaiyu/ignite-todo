import { Todo } from "@/models/todo";
import { Action } from "@/reducers/todo/action";

import { todoReducer } from "@/reducers/todo/reducer";
import React from "react";

export interface TodoContextProps {
  todos: Todo[];

  add: (content: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;

  total: number;
  completed: number;
}

export const TodoContext = React.createContext<TodoContextProps | undefined>(
  undefined
);

interface TodoProviderProps {
  children: React.ReactNode;
}

const STORED_KEY = "@TODO:1.0.0";

export function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = React.useReducer(
    todoReducer,
    { todos: [] },
    (_state) => {
      const stored = localStorage.getItem(STORED_KEY);
      if (!stored) return _state;
      return JSON.parse(stored);
    }
  );

  const { todos } = state;

  const total = todos?.length ?? 0;
  const completed = todos?.filter((todo) => todo.completed)?.length ?? 0;

  function add(content: string) {
    dispatch(Action.add(content));
  }

  function remove(id: string) {
    dispatch(Action.remove(id));
  }

  function toggle(id: string) {
    dispatch(Action.toggle(id));
  }

  React.useEffect(() => {
    const json = JSON.stringify(state);
    localStorage.setItem(STORED_KEY, json);
  }, [state]);

  return (
    <TodoContext.Provider
      value={{ todos, add, remove, toggle, total, completed }}
    >
      {children}
    </TodoContext.Provider>
  );
}
