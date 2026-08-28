import type { ReactNode } from "react";
import { MiniNav } from "@/components/layout/MiniNav";
import { SubNav } from "@/components/layout/SubNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full min-h-0 bg-[var(--colors-background-neutral)]">
      <MiniNav />
      <SubNav />
      <main className="min-h-0 min-w-0 flex-1 overflow-auto bg-[var(--colors-background-default)]">
        {children}
      </main>
    </div>
  );
}
