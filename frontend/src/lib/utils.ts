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

export const bytesFormat = (bytes: number | string): string => {
  if (typeof bytes === "string") {
    bytes = parseInt(bytes);
  }
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(1))} ${sizes[i]}`;
};
