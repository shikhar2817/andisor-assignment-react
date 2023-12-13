import { PrimaryVariant, Product } from "@/types";
import React, { useState } from "react";
import { Badge } from "..";
import { ChevronDownIcon, ChevronUpIcon } from "@/icons";
import { sizeArrayGenerate } from "./TableRow";

interface Props {
    product: Product;
    primaryVariant: PrimaryVariant;
}

export const SubTableRow: React.FC<Props> = ({ product, primaryVariant }) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <tr className="bg-white border-b" onClick={handleToggle}>
                <th scope="row" className="px-6 pl-28 inline-flex py-4 font-medium text-gray-900 whitespace-nowrap">
                    {primaryVariant.name}
                    {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    <div className="text-xs pt-1 m-0 inline-block align-bottom font-light text-gray-500">
                        {primaryVariant.secondary_variants.length} sizes
                    </div>
                    {primaryVariant.active ? <Badge>Active</Badge> : <></>}
                </th>
                <td className="px-6 py-4">{primaryVariant.inventory}</td>
                <td className="px-6 py-4">${primaryVariant.price}</td>
                <td className="px-6 py-4">{primaryVariant.discountPercentage}%</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">{sizeArrayGenerate(primaryVariant.secondary_variants)}</td>
                <td className="px-6 py-4">{primaryVariant.inventory}</td>
                <td className="px-6 py-4">{product.leadTime}</td>
            </tr>
            {open ? (
                <>
                    {primaryVariant.secondary_variants.map((secondaryVariant, index) => {
                        return (
                            <tr className="bg-white border-b" key={`${secondaryVariant.name}-${index}`}>
                                <th scope="row" className="px-6 pl-40 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {secondaryVariant.name}
                                </th>
                                <td className="px-6 py-4">{secondaryVariant.inventory}</td>
                                <td className="px-6 py-4">${secondaryVariant.price}</td>
                                <td className="px-6 py-4">{secondaryVariant.discountPercentage}%</td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">{secondaryVariant.inventory}</td>
                                <td className="px-6 py-4">{product.leadTime}</td>
                            </tr>
                        );
                    })}
                </>
            ) : null}
        </>
    );
};
