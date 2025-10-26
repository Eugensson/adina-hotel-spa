"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

import { cn } from "@/lib/utils";

interface CheckOutProps {
  className?: string;
}

export const CheckOut = ({ className }: CheckOutProps) => {
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <div
      className={cn("relative flex items-center justify-end h-full", className)}
    >
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar size={16} className="text-accent" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check-in"
        minDate={new Date()}
        onChange={(date) => setEndDate(date as Date)}
      />
    </div>
  );
};
