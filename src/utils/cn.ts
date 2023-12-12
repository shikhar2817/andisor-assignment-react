import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputClasses: ClassValue[]) => {
    return twMerge(clsx(inputClasses));
};
