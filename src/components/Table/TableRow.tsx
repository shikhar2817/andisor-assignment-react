import React, { useState } from "react";
import { SubTableRow, ToggleButton } from "..";
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
                            <SubTableRow
                                key={`${primaryVariant.name}-${index}`}
                                product={product}
                                primaryVariant={primaryVariant}
                            />
                        );
                    })}
                </>
            ) : null}
        </>
    );
};
