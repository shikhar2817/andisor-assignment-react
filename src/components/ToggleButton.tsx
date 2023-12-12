import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonVariants> {
    children?: ReactNode;
}

export const ToggleButton: React.FC<Props> = ({ children, className, variant, ...props }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className={cn(buttonVariants({ variant }))} {...props} />
            {children}
        </label>
    );
};

const buttonVariants = cva(
    "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all",
    {
        variants: {
            variant: {
                primary: "peer-checked:bg-blue-600",
                secondary: "peer-checked:bg-gray-600",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
