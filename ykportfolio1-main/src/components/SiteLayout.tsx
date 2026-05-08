import type { ReactNode } from "react";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <main className={transparentHeader ? "flex-1 flex flex-col" : "flex-1 flex flex-col pt-16"}>
      {children}
    </main>
  );
}
