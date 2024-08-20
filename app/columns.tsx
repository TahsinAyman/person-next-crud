"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Person } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { confirmation } from "./components/confirmation";
import { deletePerson } from "./person.service";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    header: "Actions",
    cell: (row) => {
      const { id } = row.row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`/edit/${id}`} className="cursor-pointer">
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              onClick={() => {
                confirmation(
                  "Are you sure you want to delete this person?",
                  async () => {
                    try {
                      await deletePerson(id);
                    } catch (error) {
                      toast.error("Something went wrong");
                    }
                  }
                );
              }}
              className="cursor-pointer"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
