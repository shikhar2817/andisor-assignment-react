import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
    return (
        <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:hover:bg-blue-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
            {children}
        </button>
    );
};
