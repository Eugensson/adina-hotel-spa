"use client";

import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { RoomContext } from "@/components/room-context";

import { cn } from "@/lib/utils";

const list = [
  { name: "No Children", value: 0 },
  { name: "1 Child", value: 1 },
  { name: "2 Children", value: 2 },
  { name: "3 Children", value: 3 },
  { name: "4 Children", value: 4 },
];

interface KidsDropdownProps {
  className?: string;
}

export const KidsDropdown = ({ className }: KidsDropdownProps) => {
  const context = useContext(RoomContext);

  if (!context)
    throw new Error("RoomContext must be used within a RoomProvider");

  const { kids, setKids } = context;

  return (
    <Menu as="div" className={cn("w-full h-full bg-white relative", className)}>
      <MenuButton className="w-full h-full flex items-center justify-between px-8">
        {kids === 0 ? null : kids}{" "}
        {kids === 0 ? "No Children" : kids === 1 ? "Child" : "Children"}
        <BsChevronDown size={16} className="text-accent-hover" />
      </MenuButton>
      <MenuItems
        as="ul"
        className="absolute z-40 w-full flex flex-col bg-white"
      >
        {list.map(({ name, value }) => (
          <MenuItem
            as="li"
            key={name}
            onClick={() => setKids(value)}
            className="w-full h-12 flex items-center justify-center lg:justify-start lg:pl-8 border-b last-of-type:border-none hover:bg-accent hover:text-white cursor-pointer"
          >
            {name}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
