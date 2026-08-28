import { useMemo, useState } from "react";
import { EmptyState } from "@/components/leave-balances/EmptyState";
import { EmployeesTable } from "@/components/leave-balances/EmployeesTable";
import { FilterSelect } from "@/components/leave-balances/FilterSelect";
import { GroupBar } from "@/components/leave-balances/GroupBar";
import { SegmentedTabs } from "@/components/leave-balances/SegmentedTabs";
import { TableToolbar } from "@/components/leave-balances/TableToolbar";
import employeesJson from "@/data/employees.json";
import { matchesEmployeeName } from "@/lib/employees";
import type { Employee } from "@/types/employee";

const employees = employeesJson as Employee[];

const CHAIN_OPTIONS = [{ value: "all", label: "All" }];
const LOCATION_OPTIONS = [{ value: "all", label: "All" }];

const GROUP_IDS = ["level-1", "level-2", "level-3"] as const;

export function LeaveBalancesPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"Head office" | "Restaurants">("Restaurants");
  const [chain, setChain] = useState("all");
  const [location, setLocation] = useState("all");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const filteredEmployees = useMemo(
    () => employees.filter((employee) => matchesEmployeeName(employee.name, query)),
    [query],
  );

  const trimmedQuery = query.trim();
  const showEmptyState = trimmedQuery.length > 0 && filteredEmployees.length === 0;
  const level1Open = !collapsed["level-1"];
  const level2Open = level1Open && !collapsed["level-2"];
  const level3Open = level2Open && !collapsed["level-3"];

  function toggleGroup(id: string) {
    setCollapsed((current) => ({ ...current, [id]: !current[id] }));
  }

  function collapseAll() {
    setCollapsed(Object.fromEntries(GROUP_IDS.map((id) => [id, true])));
  }

  return (
    <section className="flex min-h-full flex-col">
      <h1 className="text-[length:var(--typography-fontSize-2xl)] font-[number:var(--typography-fontWeight-bold)] leading-[var(--typography-lineHeight-2xl)] text-[var(--colors-text-primary)]">
        Leave Balances
      </h1>

      <div className="mt-[var(--spacing-5)]">
        <SegmentedTabs value={tab} onChange={setTab} />
      </div>

      <div className="mt-[var(--spacing-4)] flex flex-wrap gap-[var(--spacing-3)]">
        <FilterSelect label="Chain" value={chain} onChange={setChain} options={CHAIN_OPTIONS} />
        <FilterSelect
          label="Location"
          value={location}
          onChange={setLocation}
          options={LOCATION_OPTIONS}
        />
      </div>

      <div className="mt-[var(--spacing-5)] flex-1 rounded-[var(--layout-shell-radius)] bg-[var(--colors-common-white)] px-[var(--spacing-5)] py-[var(--spacing-5)]">
        <TableToolbar query={query} onQueryChange={setQuery} onCollapseAll={collapseAll} />

        {showEmptyState ? (
          <EmptyState query={trimmedQuery} />
        ) : (
          <div className="mt-[var(--spacing-4)] flex flex-col gap-[var(--spacing-2)]">
            <GroupBar
              title={tab}
              level={1}
              expanded={level1Open}
              onToggle={() => toggleGroup("level-1")}
            />
            {level1Open ? (
              <GroupBar
                title={CHAIN_OPTIONS.find((option) => option.value === chain)?.label ?? "All"}
                level={2}
                expanded={level2Open}
                onToggle={() => toggleGroup("level-2")}
              />
            ) : null}
            {level2Open ? (
              <GroupBar
                title={
                  LOCATION_OPTIONS.find((option) => option.value === location)?.label ?? "All"
                }
                level={3}
                expanded={level3Open}
                onToggle={() => toggleGroup("level-3")}
              />
            ) : null}
            {level3Open ? <EmployeesTable employees={filteredEmployees} /> : null}
          </div>
        )}
      </div>
    </section>
  );
}
