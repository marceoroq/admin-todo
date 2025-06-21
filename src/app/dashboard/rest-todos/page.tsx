import TodosGrid from "@/components/Todos/TodosGrid";
import { getTodos } from "@/db/todos";

export default async function RestTodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
