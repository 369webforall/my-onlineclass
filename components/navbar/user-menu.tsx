"use client";
import { LogOut, User, LogIn } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut, useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
export const UserMenu = () => {
const {status, data: session} = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {status === 'authenticated' && (
  <DropdownMenuItem>
  <LogOut className="mr-2 h-4 w-4" />
  <Link href={"/api/auth/signout"}>Log out</Link>
  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
</DropdownMenuItem>
        )}

{status === 'unauthenticated' && (
  <DropdownMenuItem>
  <LogIn className="mr-2 h-4 w-4" />
  <Link href={"/auth/login"}>Login</Link>
  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
</DropdownMenuItem>
        )}
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
