'"use client";'

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
import { ZeroInit } from "@/components/zero-init";

export default function Home() {
  const { data: session } = authClient.useSession();
  const z = useZero<Schema, Mutators>();
  const [tasks] = useQuery(z.query.tasks.where("userId", session?.user.id ?? ''));
  const userID = session?.user.id ?? '';
  const [jwtToken, setJwtToken] = useState<string>('');

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
    if (title && session?.user.id) {
      // Use the mutate function with proper typing
      await z.mutate.tasks.add({ title, status: "incomplete" });
      form.reset();
    }
  }

  return (
    <ZeroInit {...{
      userID,
      token: jwtToken.data?.token || '',
    }}>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4">TodoIt</h1>
          <div className="flex mb-4">
            <form onSubmit={onSubmit}>
              <Input
                type="text"
                placeholder="Add a new task..."
                className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
      </main></ZeroInit>
  );
}
