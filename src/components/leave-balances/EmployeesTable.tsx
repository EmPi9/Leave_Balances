import { EmployeeAvatar } from "@/components/leave-balances/EmployeeAvatar";
import { RowMenu } from "@/components/leave-balances/RowMenu";
import { formatLeave, isNegativeLeave } from "@/lib/employees";
import { cn } from "@/lib/utils";
import { LEAVE_COLUMNS, type Employee, type LeaveColumnKey } from "@/types/employee";

export function EmployeesTable({ employees }: { employees: Employee[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className={headerClassName("w-[var(--spacing-16)]")}>ID</th>
            <th className={headerClassName()}>Name</th>
            <th className={headerClassName()}>Designation</th>
            {LEAVE_COLUMNS.map((column) => (
              <th key={column.key} className={headerClassName("w-[1%] whitespace-nowrap")}>
                {column.label}
              </th>
            ))}
            <th className={headerClassName("w-[var(--spacing-10)]")}>
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b border-[var(--border)]">
              <td className={cellClassName("whitespace-nowrap text-[var(--colors-text-secondary)]")}>
                {employee.id}
              </td>
              <td className={cellClassName()}>
                <div className="flex items-center gap-[var(--spacing-3)]">
                  <EmployeeAvatar name={employee.name} />
                  <span className="font-[number:var(--typography-fontWeight-semibold)] text-[var(--colors-palette-primary-dark)]">
                    {employee.name}
                  </span>
                </div>
              </td>
              <td
                className={cellClassName(
                  "max-w-[calc(var(--spacing-32)+var(--spacing-16))] text-[length:var(--typography-fontSize-xs)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-secondary)]",
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
                        "whitespace-nowrap tabular-nums",
                        isNegativeLeave(value) && "text-[var(--colors-palette-error-default)]",
                        value === null && "text-[var(--colors-text-disabled)]",
                      ),
                    )}
                  >
                    {formatLeave(value)}
                  </td>
                );
              })}
              <td className={cellClassName("text-right")}>
                <RowMenu employeeName={employee.name} />
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
    "px-[var(--spacing-3)] py-[var(--spacing-3)] text-[length:var(--typography-fontSize-xs)] font-[number:var(--typography-fontWeight-medium)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-secondary)]",
    extra,
  );
}

function cellClassName(extra?: string) {
  return cn(
    "px-[var(--spacing-3)] py-[var(--spacing-3)] text-[length:var(--typography-fontSize-sm)] leading-[var(--typography-lineHeight-normal)] text-[var(--colors-text-primary)]",
    extra,
  );
}
