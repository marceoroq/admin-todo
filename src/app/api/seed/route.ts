import { NextResponse } from "next/server";

import { createManyTodos, deleteManyTodos } from "@/db/todos";

export async function GET() {
  try {
    // delete previous data in database
    await deleteManyTodos();

    // create new data in database
    const todos = await createManyTodos ([
      { description: "A testing task number 1" },
      { description: "A testing task number 2" },
      { description: "A testing task number 3", completed: true },
      { description: "A testing task number 4" },
      { description: "A testing task number 5" },
      { description: "A testing task number 6" },
    ]);

    return NextResponse.json({ success: true, data: todos });
  } catch (error) {
    console.error("Error creating todo item:", error);
    return NextResponse.json({ success: false, message: "Failed to create todo item" }, { status: 500 });
  }
}
