import { useMemo, useState } from "react";
import { EmptyState } from "@/components/leave-balances/EmptyState";
import { EmployeesTable } from "@/components/leave-balances/EmployeesTable";
import { SearchField } from "@/components/leave-balances/SearchField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import employeesJson from "@/data/employees.json";
import { matchesEmployeeName } from "@/lib/employees";
import type { Employee } from "@/types/employee";

const employees = employeesJson as Employee[];

export function LeaveBalancesPage() {
  const [query, setQuery] = useState("");
  const [headOfTeam, setHeadOfTeam] = useState("head-of-team");
  const [restaurant, setRestaurant] = useState("restaurants");

  const filteredEmployees = useMemo(
    () => employees.filter((employee) => matchesEmployeeName(employee.name, query)),
    [query],
  );

  const trimmedQuery = query.trim();
  const showEmptyState = trimmedQuery.length > 0 && filteredEmployees.length === 0;

  return (
    <section className="flex min-h-full flex-col px-[var(--spacing-6)] py-[var(--spacing-8)]">
      <header className="flex items-start justify-between gap-[var(--spacing-6)]">
        <h1 className="text-[length:var(--typography-fontSize-2xl)] font-[number:var(--typography-fontWeight-bold)] leading-[var(--typography-lineHeight-2xl)] text-[var(--colors-text-primary)]">
          Leave Balances
        </h1>

        <div className="flex items-center gap-[var(--spacing-3)]">
          <Select value={headOfTeam} onValueChange={setHeadOfTeam}>
            <SelectTrigger
              className="h-[var(--spacing-10)] min-w-[calc(var(--spacing-32)+var(--spacing-12))] rounded-[var(--radius)] border-[var(--input)] px-[var(--spacing-3)]"
              aria-label="Head of Team"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-[var(--radius)] border-[var(--border)]">
              <SelectItem value="head-of-team">Head of Team</SelectItem>
            </SelectContent>
          </Select>

          <Select value={restaurant} onValueChange={setRestaurant}>
            <SelectTrigger
              className="h-[var(--spacing-10)] min-w-[calc(var(--spacing-32)+var(--spacing-8))] rounded-[var(--radius)] border-[var(--input)] px-[var(--spacing-3)]"
              aria-label="Restaurants"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-[var(--radius)] border-[var(--border)]">
              <SelectItem value="restaurants">Restaurants</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <div className="mt-[var(--spacing-6)]">
        <SearchField value={query} onChange={setQuery} />
      </div>

      <div className="mt-[var(--spacing-5)] min-h-0 flex-1">
        {showEmptyState ? (
          <EmptyState query={trimmedQuery} />
        ) : (
          <EmployeesTable employees={filteredEmployees} />
        )}
      </div>
    </section>
  );
}
