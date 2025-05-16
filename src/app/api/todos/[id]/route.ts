import { NextResponse } from "next/server";
import { z as zod } from "zod";

import prisma from "@/lib/prisma";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Params) {
  const id = (await params).id;
  const todo = await prisma.todo.findUnique({ where: { id } });

  if (!todo) return NextResponse.json({ error: "Todo not found." }, { status: 404 });

  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params }: Params) {
  const id = (await params).id;
  const todo = await prisma.todo.findUnique({ where: { id } });

  if (!todo) return NextResponse.json({ error: "Todo not found." }, { status: 404 });

  const putSchema = zod
    .object({
      description: zod.string().optional(),
      completed: zod.boolean().optional(),
    })
    .strict()
    .refine((data) => data.description !== undefined || data.completed !== undefined, {
      message: "At least one of 'description' or 'completed' must be provided.",
    });

  try {
    const body = await request.json();
    const validatedData = putSchema.parse(body);
    const updatedTodo = await prisma.todo.update({ where: { id }, data: { ...validatedData } });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid format", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Error updating todo in DB" }, { status: 500 });
  }
}
