'use server'

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function toggleCompleted(id: string, completed: boolean): Promise<Todo> {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    throw new Error("Todo not found.");
  }
  
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/dashboard/server-todos");

  return updatedTodo;
}