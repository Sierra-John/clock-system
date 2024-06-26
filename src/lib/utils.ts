import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEndOfDay() {
  // Get the current date
  const today = new Date();

  // Set the time to 11:59:59 PM
  today.setHours(23, 59, 59, 999);

  return today;
}

export function getStartOfDay() {
  // Get the current date
  const today = new Date();

  // Set the time to 12:00:00 AM
  today.setHours(0, 0, 0, 0);

  return today;
}

export function formatDate(dateTimeStr: Date) {
  const dateObj = new Date(dateTimeStr);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return dateObj.toLocaleDateString("en-US", options);
}

export function extractTime(dateTimeStr: Date) {
  const dateObj = new Date(dateTimeStr);
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be converted to 12 in 12-hour format

  return `${hours}:${minutes}:${seconds} ${period}`;
}
