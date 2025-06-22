"use client";

import { cn } from "@/lib/utils";
import { Todo } from "@prisma/client";
import { FaCheck } from "react-icons/fa";

interface TodoItemProps {
  todo: Todo;
  toggleChecked: (id: string, completed: boolean) => void;
}

export default function TodoItem({
  todo: { id, description, completed },
  toggleChecked,
}: TodoItemProps) {
  return (
    <div
      className={cn(
        "bg-sky-50 border-sky-400 inline-flex items-center gap-4 p-4 border-2 max-w-lg rounded-lg cursor-pointer",
        completed && "bg-slate-100 border-slate-300"
      )}
      onClick={() => toggleChecked(id, !completed)}
    >
      <label className="flex items-center cursor-pointer relative" htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={() => toggleChecked(id, !completed)}
          className="peer cursor-pointer transition-all appearance-none rounded-full shadow h-5 w-5 hover:shadow-md border border-slate-300 bg-white checked:bg-slate-800 checked:border-slate-800"
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaCheck className="h-3 w-3" />
        </span>
      </label>
      <label
        htmlFor={id}
        className={cn(
          "cursor-pointer text-slate-600 text-sm",
          completed && "line-through text-slate-400"
        )}
      >
        {description}
      </label>
    </div>
  );
}
