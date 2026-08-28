import { KebabIcon, NotesIcon } from "@/components/icons";
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
          <KebabIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <NotesIcon />
          Manual adjustment
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
