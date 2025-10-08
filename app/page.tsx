"use client"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useQuery, useZero } from "@rocicorp/zero/react";
import { Schema } from "@/db/zero/schema";
import { authClient } from "@/lib/auth-client";
import { Mutators } from "@/db/zero/mutators";
import { useState, useEffect } from "react";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { tasks } from "@/db/schema";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

export default function Home() {
  const { data: session } = authClient.useSession();
  const z = useZero<Schema, Mutators>();
  const [tasks] = useQuery(z.query.tasks.where("userId", session?.user.id ?? ''));
  //

  const userID = session?.user.id ?? '';
  const [jwtToken, setJwtToken] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>(new Date())


  useEffect(() => {
    const fetchToken = async () => {
      const token = await authClient.token();
      setJwtToken(token.data?.token || '');
    };
    fetchToken();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;

    if (!title) {
      toast.error("Please enter a title for your task.");
      return;
    }

    if (!session?.user.id) {
      toast.error("You must be logged in to add a task.");
      return;
    }

    try {
      await z.mutate.tasks.add({
        title,
        description: "",
        due_date: date?.getTime(),
        status: "pending",
      });
      toast.success("Task has been created.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create task. Please try again.");
    }
  }

  return (
    // <ZeroInit
    //   userID={userID}
    //   token={jwtToken || ''}
    // >
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">TodoIt</h1>
        <div className="flex mb-4">
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="Add a new task..."
              name="title"
              className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Calendar mode="single"
              selected={date}
              onSelect={setDate} />
            <Button>
              Add
            </Button>
          </form>
        </div>
        <ItemGroup>
          {tasks?.filter((task) => task.id !== null) // filter out null IDs
            .map((task) => (
              <Item key={task.id}>
                <ItemContent>
                  <ItemTitle>{task.title}</ItemTitle>
                  <ItemDescription>{task.description ?? ""}</ItemDescription>
                  <ItemFooter>
                    <time className="text-sm text-gray-500">
                      {new Date(task.due_date || 0).toLocaleDateString()}
                    </time>
                  </ItemFooter>
                </ItemContent>
                <ItemActions>
                </ItemActions>
              </Item>
            ))}
        </ItemGroup>
      </div>
    </main>
    // </ZeroInit>
  );
}
