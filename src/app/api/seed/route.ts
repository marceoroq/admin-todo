import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // delete previous data in database
    await prisma.todo.deleteMany();

    // create new data in database
    const todo = await prisma.todo.createMany({
      data: [
        { description: "A testing task number 1" },
        { description: "A testing task number 2" },
        { description: "A testing task number 3", completed: true },
        { description: "A testing task number 4" },
        { description: "A testing task number 5" },
        { description: "A testing task number 6" },
      ],
    });
    console.log(todo);
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    console.error("Error creating todo item:", error);
    return NextResponse.json({ success: false, message: "Failed to create todo item" }, { status: 500 });
  }
}
