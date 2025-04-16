"use client";
import { User } from "@/db/types";
import { createContext, useContext } from "react";

// @ts-expect-error User is not defined at this point
const UserContext = createContext<{ user: User }>();
export const useUser = () => useContext(UserContext);

interface Props {
  user: User;
  children: React.ReactNode;
}

export function UserProvider({ user, children }: Props) {
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}
