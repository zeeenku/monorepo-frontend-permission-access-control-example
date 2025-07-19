import React from "react";
import { AclProvider } from "~/packages/acl";

export default function AdminRoot({ children }: { children: React.ReactNode }) {
  return <AclProvider role={"admin"}>{children}</AclProvider>;
}
