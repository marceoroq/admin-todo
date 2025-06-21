import TodosGrid from "@/components/Todos/TodosGrid";
import { getTodos } from "@/lib/db";

export default async function RestTodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
