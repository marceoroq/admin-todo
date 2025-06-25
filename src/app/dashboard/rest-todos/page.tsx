import { getTodos } from "@/db/todos";

import { NewTodo } from "@/components/Todos/NewTodo";
import TodosGrid from "@/components/Todos/TodosGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rest Todos",
  description: "Rest Todos Page",
};

export default async function RestTodosPage() {
  const todos = await getTodos({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
