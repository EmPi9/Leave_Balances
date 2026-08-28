import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full min-h-0 gap-[var(--spacing-5)] bg-[var(--colors-palette-gray-200)] p-[var(--spacing-4)]">
      <Sidebar />
      <main className="min-h-0 min-w-0 flex-1 overflow-auto">{children}</main>
    </div>
  );
}
