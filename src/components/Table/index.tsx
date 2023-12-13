import { ReactNode } from "react";
import { SearchBar } from "..";

interface Props {
    children?: ReactNode;
    tableColumnList?: string[];
}

export const Table: React.FC<Props> = ({ children, tableColumnList = [] }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <SearchBar />
                        </th>
                        {tableColumnList.map((cloumnName, index) => {
                            return (
                                <th key={`${cloumnName}-${index}`} scope="col" className="px-6 py-3">
                                    {cloumnName}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export { TableRow } from "./TableRow";
