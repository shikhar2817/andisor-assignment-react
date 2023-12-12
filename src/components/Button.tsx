import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children?: ReactNode;
}

export const Button: React.FC<Props> = ({ children, className, variant, ...props }) => {
    return (
        <button type="button" className={cn(buttonVariants({ variant }))} {...props}>
            {children}
        </button>
    );
};

const buttonVariants = cva("text-center inline-flex items-center rounded-full", {
    variants: {
        variant: {
            primary:
                "text-white bg-blue-600 hover:bg-blue-700 active:hover:bg-blue-900 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2",
            secondary:
                "text-gray-500 hover:bg-gray-500 hover:text-white active:hover:bg-gray-700 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
