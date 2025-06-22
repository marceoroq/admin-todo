import prisma from "@/lib/prisma";
import { Prisma, Todo } from "@prisma/client";

export async function getTodos(options = {}) {
  return await prisma.todo.findMany(options);
}

export async function getTodoById(id: string): Promise<Todo | null> {
  return await prisma.todo.findUnique({
    where: { id },
  });
}

export async function createManyTodos(data: { description: string, completed?: boolean }[]): Promise<Prisma.BatchPayload> {
  return await prisma.todo.createMany({ data })
}

export async function createTodo(data: { description: string, completed?: boolean }): Promise<Todo> {
  return await prisma.todo.create({
    data: {
      description: data.description,
      completed: data.completed, // default is false if not provided
    },
  });
}

export async function updateTodo(id: string, data: { description?: string, completed?: boolean}): Promise<Todo> {
  return await prisma.todo.update({
    where: { id },
    data,
  });
}

export async function deleteManyTodos(options = {}): Promise<Prisma.BatchPayload> {
  return await prisma.todo.deleteMany(options);
}