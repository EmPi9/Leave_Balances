import type { LeaveValue } from "@/types/employee";

export function formatLeave(value: LeaveValue): string {
  if (value === null) {
    return "—";
  }

  return value.toFixed(2);
}

export function isNegativeLeave(value: LeaveValue): boolean {
  return value !== null && value < 0;
}

export function matchesEmployeeName(name: string, query: string): boolean {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (normalizedQuery.length === 0) {
    return true;
  }

  return name.toLocaleLowerCase().includes(normalizedQuery);
}
