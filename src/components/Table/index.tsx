import { ReactNode } from "react";
import { SearchBar } from "..";
import { ChevronDownIcon } from "@/icons";

export interface TableColumnList {
    title: string;
    sortable?: boolean;
    symbol?: string;
}

interface Props {
    children?: ReactNode;
    tableColumnList?: TableColumnList[];
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
                        {tableColumnList.map((column, index) => {
                            return (
                                <th key={`${column.title}-${index}`} scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        {column.title}
                                        {column.symbol ? column.symbol : ""}
                                        {column.sortable ? <ChevronDownIcon /> : <></>}
                                    </div>
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
