import { NotesIcon, MenuDotsIcon } from "@/components/icons/solar";
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
          <MenuDotsIcon style={{ width: "var(--spacing-5)", height: "var(--spacing-5)" }} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <NotesIcon style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }} />
          Manual adjustment
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
