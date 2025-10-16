"use client";

import { ReactNode } from "react";
import { ZeroProvider } from "@rocicorp/zero/react";
import { schema } from "@/db/zero/schema";
import { createMutators, Mutators } from "@/db/zero/mutators";

interface ZeroInitProps {
  children: ReactNode;
  userID: string;
  token?: string;
}

export function ZeroInit({ children, userID, token }: ZeroInitProps) {
  return (
    <ZeroProvider<typeof schema, Mutators>
      userID={userID}
      auth={token}
      server={process.env.NEXT_PUBLIC_API_URL || "http://localhost:4848"}
      schema={schema}
      mutators={createMutators({
        user: { id: userID },
        session: token ? { token } : undefined,
      })}
    >
      {children}
    </ZeroProvider>
  );
}