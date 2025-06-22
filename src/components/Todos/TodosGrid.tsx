"use client";

import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";

import TodoItem from "@/components/Todos/TodoItem";
import * as todosApi from "@/services/todos";

interface TodosGridProps {
  todos: Todo[];
}

export default function TodosGrid({ todos }: TodosGridProps) {
  const router = useRouter();

  const toggleChecked = async (id: string, completed: boolean) => {
    await todosApi.updateTodo(id, { completed });
    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleChecked={toggleChecked} />
      ))}
    </div>
  );
}
