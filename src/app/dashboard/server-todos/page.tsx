import { getTodos } from "@/db/todos";

import { NewTodo } from "@/components/Todos/NewTodo";
import TodosGrid from "@/components/Todos/TodosGrid";

export default async function ServerTodosPage() {
  const todos = await getTodos({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
