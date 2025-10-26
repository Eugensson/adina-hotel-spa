"use client";

import { useContext } from "react";

import { CheckIn } from "@/components/check-in";
import { CheckOut } from "@/components/check-out";
import { RoomContext } from "@/components/room-context";
import { KidsDropdown } from "@/components/kids-dropdown";
import { AdultsDropdown } from "@/components/adults-dropdown";

export const BookForm = () => {
  const context = useContext(RoomContext);

  if (!context)
    throw new Error("RoomContext must be used within a RoomProvider");

  const { handleClick } = context;

  return (
    <form onSubmit={handleClick} className="h-75 lg:h-17.5">
      <div className="h-full flex flex-col lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
        <button type="submit" className="btn btn-primary">
          Check now
        </button>
      </div>
    </form>
  );
};
