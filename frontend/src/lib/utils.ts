import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bytesToGB = (bytes: number | string): number => {
  if (typeof bytes === "string") {
    bytes = parseInt(bytes);
  }
  const res = parseFloat((bytes / 1024 ** 3).toFixed(1)).toFixed(1);

  return parseFloat(res);
};
