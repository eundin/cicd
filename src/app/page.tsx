"use client";

import { useEffect, useState } from "react";
import { TODO } from "./components/types";
import { fetchAllTodos, saveToStorage } from "./libs/storage-api";
import { List } from "./components/list";
import Form from "./components/form";

export default function Home() {
  const [todos, setTodos] = useState<TODO[]>([]);

  const handleSaveToStorage = async (todo: TODO) => {
    await saveToStorage([...todos, todo]);
  };

  useEffect(() => {
    fetchAllTodos().then((items) => setTodos(items));
  }, []);

  return (
    <main className="p-4 rounded-md bg-white shadow-md w-full max-w-md flex flex-col ">
      <h1 className="font-bold text-sm">{"To Do List"}</h1>
      <List />
      <Form setTodos={setTodos} handleSaveToStorage={handleSaveToStorage} />
    </main>
  );
}
