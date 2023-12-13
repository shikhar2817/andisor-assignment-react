import React, { useState } from "react";
import { Badge, ToggleButton } from "..";
import { Product } from "@/types";

interface Props {
    product: Product;
}

export const TableRow: React.FC<Props> = ({ product }) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <tr className="bg-white border-b">
                <th
                    scope="row"
                    className="inline-flex items-end align-middle px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                    <ToggleButton open={open} onClick={handleToggle} />
                    <div className="pl-5">{product.title}</div>
                </th>
                <td className="px-6 py-4">{product.inventory}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.discountPercentage}%</td>
                <td className="px-6 py-4">{product.primary_variant_name}</td>
                <td className="px-6 py-4">{product.secondary_variant_name}</td>
                <td className="px-6 py-4">{product.inventory}</td>
                <td className="px-6 py-4">{product.leadTime}</td>
            </tr>
            {open ? (
                <>
                    {product.primary_variants.map((primaryVariant, index) => {
                        return (
                            <>
                                <tr className="bg-white border-b">
                                    <th
                                        scope="row"
                                        className="px-6 pl-28 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {primaryVariant.name}
                                        {primaryVariant.active ? <Badge>Active</Badge> : <></>}
                                    </th>
                                    <td className="px-6 py-4">{primaryVariant.inventory}</td>
                                    <td className="px-6 py-4">${primaryVariant.price}</td>
                                    <td className="px-6 py-4">{primaryVariant.discountPercentage}%</td>
                                    <td className="px-6 py-4"></td>
                                    <td className="px-6 py-4">{product.secondary_variant_name}</td>
                                    <td className="px-6 py-4">{primaryVariant.inventory}</td>
                                    <td className="px-6 py-4">{product.leadTime}</td>
                                </tr>
                                {primaryVariant.secondary_variants.map((secondaryVariant, index) => {
                                    return (
                                        <tr className="bg-white border-b" key={`${secondaryVariant.name}-${index}`}>
                                            <th
                                                scope="row"
                                                className="px-6 pl-40 py-4 font-medium text-gray-900 whitespace-nowrap"
                                            >
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
                        );
                    })}
                </>
            ) : null}
        </>
    );
};
