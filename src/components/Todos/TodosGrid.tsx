"use client";

import { Todo } from "@prisma/client";

import TodoItem from "@/components/Todos/TodoItem";
import { toggleCompleted } from "@/actions/todos.actions";

interface TodosGridProps {
  todos: Todo[];
}

export default function TodosGrid({ todos }: TodosGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
}
