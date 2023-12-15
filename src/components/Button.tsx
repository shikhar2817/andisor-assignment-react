import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children?: ReactNode;
}

export const Button: React.FC<Props> = ({ children, className, variant, active, ...props }) => {
    return (
        <button type="button" className={cn(buttonVariants({ variant, active }), className)} {...props}>
            {children}
        </button>
    );
};

const buttonVariants = cva("text-center inline-flex items-center rounded-full", {
    variants: {
        variant: {
            primary:
                "text-white bg-purple-600 hover:bg-purple-700 active:hover:bg-purple-900 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2",
            secondary:
                "text-gray-500 hover:bg-gray-500 hover:text-white active:hover:bg-gray-700 font-medium text-sm px-3 py-2.5 text-center me-2 mb-2",
            gaint: "rounded text-gray-400 hover:text-gray-600 active:hover:text-gray-800 font-medium text-2xl px-3 py-2.5 text-center me-2 mb-2 focus:text-gray-600",
        },
        active: {
            gaintActive: "text-gray-600",
            none: "",
        },
    },
    defaultVariants: {
        variant: "primary",
        active: "none",
    },
});
