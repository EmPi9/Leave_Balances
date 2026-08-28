import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatLeave, isNegativeLeave } from "@/lib/employees";
import { cn } from "@/lib/utils";
import { LEAVE_COLUMNS, type Employee, type LeaveColumnKey } from "@/types/employee";

type EmployeesTableProps = {
  employees: Employee[];
};

export function EmployeesTable({ employees }: EmployeesTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className={headerClassName("w-[var(--spacing-16)] whitespace-nowrap")}>ID</th>
            <th className={headerClassName()}>Name</th>
            <th className={headerClassName()}>Designation</th>
            {LEAVE_COLUMNS.map((column) => (
              <th
                key={column.key}
                className={headerClassName(
                  "w-[1%] px-[var(--spacing-2)] text-center whitespace-nowrap",
                )}
              >
                {column.label}
              </th>
            ))}
            <th className={headerClassName("w-[var(--spacing-10)] px-[var(--spacing-2)]")}>
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b border-[var(--border)] align-middle">
              <td className={cellClassName("whitespace-nowrap text-[var(--colors-text-secondary)]")}>
                {employee.id}
              </td>
              <td
                className={cellClassName(
                  "not-italic font-[number:var(--typography-fontWeight-semibold)] text-[var(--colors-palette-primary-default)]",
                )}
              >
                {employee.name}
              </td>
              <td
                className={cellClassName(
                  "text-[length:var(--typography-fontSize-xs)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-secondary)]",
                )}
              >
                {employee.designation}
              </td>
              {LEAVE_COLUMNS.map((column) => {
                const value = employee[column.key as LeaveColumnKey];

                return (
                  <td
                    key={column.key}
                    className={cellClassName(
                      cn(
                        "w-[1%] px-[var(--spacing-2)] text-center tabular-nums whitespace-nowrap",
                        isNegativeLeave(value) && "text-[var(--colors-palette-error-default)]",
                        value === null && "text-[var(--colors-text-disabled)]",
                      ),
                    )}
                  >
                    {formatLeave(value)}
                  </td>
                );
              })}
              <td className={cellClassName("w-[var(--spacing-10)] px-[var(--spacing-2)] text-right")}>
                <Button
                  variant="icon"
                  aria-label={`Actions for ${employee.name}`}
                  className="text-[var(--colors-text-secondary)]"
                >
                  <MoreHorizontal
                    style={{ width: "var(--spacing-5)", height: "var(--spacing-5)" }}
                    strokeWidth={1.75}
                  />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function headerClassName(extra?: string) {
  return cn(
    "px-[var(--spacing-4)] py-[var(--spacing-3)] text-[length:var(--typography-fontSize-xs)] font-[number:var(--typography-fontWeight-semibold)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-secondary)]",
    extra,
  );
}

function cellClassName(extra?: string) {
  return cn(
    "px-[var(--spacing-4)] py-[var(--spacing-4)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-primary)]",
    extra,
  );
}
