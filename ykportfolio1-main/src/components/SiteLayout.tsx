import type { ReactNode } from "react";
import { Header } from "./Header";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className={transparentHeader ? "flex-1" : "flex-1 pt-16"}>{children}</main>
    </div>
  );
}
