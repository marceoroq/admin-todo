import { NewTodo } from "@/components/Todos/NewTodo";
import TodosGrid from "@/components/Todos/TodosGrid";
import { getTodos } from "@/db/todos";

export default async function RestTodosPage() {
  const todos = await getTodos({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
