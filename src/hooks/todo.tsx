import { TodoContext } from "@/contexts/todo";
import React from "react";

export function useTodo() {
  const context = React.useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}
