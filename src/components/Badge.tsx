import { colorType } from "@/types";
import { cn } from "@/utils";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    color?: colorType;
    className?: string;
}

export const Badge: React.FC<Props> = ({ children, className, color = "green" }) => {
    const colorClass = {
        red: "bg-red-500 border border-red-500",
        green: "bg-green-500 border border-green-500",
        blue: "bg-blue-500 border border-blue-500",
        yellow: "bg-yellow-500 border border-yellow-500",
        white: "bg-white border border-gray-400",
    };
    return (
        <span
            className={cn(
                "text-white text-xs font-medium me-2 px-2.5 py-0.5 mx-2 rounded-full border border-slate-500",
                colorClass[color],
                className
            )}
        >
            {children}
        </span>
    );
};
