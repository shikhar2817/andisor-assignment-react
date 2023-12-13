import React, { Children, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export const Badge: React.FC<Props> = ({ children }) => {
    return (
        <span className="bg-green-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 mx-2 rounded-full">
            {children}
        </span>
    );
};
