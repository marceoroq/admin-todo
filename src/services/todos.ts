import { Todo } from "@prisma/client";

export async function updateTodo(id: string, data: { description?: string; completed?: boolean }): Promise<Todo> {
  try {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    const updatedTodo = await response.json();
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;  
  }
}

export async function createTodo(description: string): Promise<Todo> {
  try {
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to create todo");
    }
    const newTodo = await response.json();
    return newTodo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;  
  }
}

export async function deleteTodo(id: string): Promise<void> {
  try {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;  
  }
}

export async function deleteCompletedTodos(): Promise<void> {
  try {
    const response = await fetch("/api/todos/", {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete completed todos");
    }
  } catch (error) {
    console.error("Error deleting completed todos:", error);
    throw error;  
  }
}