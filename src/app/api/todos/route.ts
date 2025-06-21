import { NextRequest, NextResponse } from "next/server";
import { z as zod } from "zod";

import { createTodo, getTodos } from "@/db/todos";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const take = Number(searchParams.get("limit")) || 10;
  const skip = Number(searchParams.get("offset")) || 0;

  try {
    // get all todos from db
    const todos = await getTodos({ take, skip });
    return NextResponse.json({ success: true, data: todos });
  } catch (error) {
    console.error("Error getting todo items:", error);
    return NextResponse.json({ success: false, message: "Failed to get todo items" }, { status: 500 });
  }
}

const postSchema = zod
  .object({
    description: zod.string().min(1, "Description is required"),
    completed: zod.boolean().optional().default(false),
  })
  .strict();

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const validatedData = postSchema.parse(body);
    const savedTodo = await createTodo(validatedData);
    return NextResponse.json({ success: true, data: savedTodo });
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid format", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Error creating todo in DB" }, { status: 500 });
  }
}
