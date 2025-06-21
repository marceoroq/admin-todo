import prisma from "@/lib/prisma";

export async function getTodos(options = {}) {
  return await prisma.todo.findMany(options);
}