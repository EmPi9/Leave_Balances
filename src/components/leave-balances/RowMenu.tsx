import { FilePenLine, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function RowMenu({ employeeName }: { employeeName: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="icon"
          aria-label={`Actions for ${employeeName}`}
          className="text-[var(--colors-text-secondary)]"
        >
          <MoreHorizontal
            style={{ width: "var(--spacing-5)", height: "var(--spacing-5)" }}
            strokeWidth={1.75}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <FilePenLine
            style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
            strokeWidth={1.75}
          />
          Manual adjustment
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
