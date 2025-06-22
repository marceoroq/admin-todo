"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";

import { createTodo, deleteCompletedTodos } from "@/services/todos";

export const NewTodo = () => {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    // Call the API to create a new todo
    await createTodo(description);

    // Clear the input field after submission
    setDescription("");

    // Refresh the page to show the new todo
    router.refresh();
  };

  const handleDeleteCompleted = async () => {
    // Call the API to delete completed todos
    await deleteCompletedTodos();
    // Refresh the page to reflect changes
    router.refresh();
  };

  return (
    <form className="flex w-full mb-6" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        placeholder="What do you need to do?"
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="flex items-center font-semibold justify-center rounded-lg ml-2 border-2 border-sky-500 bg-sky-500 p-2 text-white hover:bg-sky-600 hover:border-sky-600 transition-all"
      >
        <FaPlus className="mr-1" />
        Create
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={handleDeleteCompleted}
        type="button"
        className="flex items-center justify-center rounded-lg ml-2 border-2 border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white transition-all"
      >
        <FaRegTrashCan className="mr-1" />
        Delete Completed Tasks
      </button>
    </form>
  );
};
