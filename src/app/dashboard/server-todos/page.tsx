import { Metadata } from "next";

import { getTodos } from "@/db/todos";

import { NewTodo } from "@/components/Todos/NewTodo";
import TodosGrid from "@/components/Todos/TodosGrid";

export const metadata: Metadata = {
  title: "Server Actions Todos",
  description: "Server Actions Todos Page",
};

export default async function ServerTodosPage() {
  const todos = await getTodos({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
