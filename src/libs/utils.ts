import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const classMerge = (...classNames: ClassValue[]) => twMerge(clsx(classNames));
