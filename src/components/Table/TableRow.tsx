import React, { useState } from "react";
import { Badge, SubTableRow, ToggleButton } from "..";
import { PrimaryVariant, Product, SecondaryVariant, colorType } from "@/types";
import { ChevronDownIcon, ChevronUpIcon } from "@/icons";

interface Props {
    product: Product;
}

export const sizeArrayGenerate = (list: SecondaryVariant[]): string => {
    let listString = "";
    let count = 0;
    for (let i = 0; i < Math.min(3, list.length); i++) {
        listString += list[i].name[0];
        if (i != 2) listString += ",";
    }
    if (list.length <= 3) return listString;
    count = list.length - 3;
    listString += " +";
    listString += String(count);
    return listString;
};

export const colorArrayGenerate = (list: PrimaryVariant[]) => {
    if (list.length <= 2)
        return (
            <div>
                {list.map((variant, index) => {
                    return (
                        <Badge
                            key={`${variant.name}-badge-${index}`}
                            color={variant.name.toLowerCase() as colorType}
                            className="m-0"
                        />
                    );
                })}
            </div>
        );

    return (
        <div>
            <Badge color={list[0].name.toLowerCase() as colorType} className="m-1" />
            <Badge color={list[1].name.toLowerCase() as colorType} className="m-1" />+ {list.length - 2}
        </div>
    );
};

export const TableRow: React.FC<Props> = ({ product }) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <tr className=" border-b">
                <th
                    scope="row"
                    className="inline-flex items-end align-middle px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                    <ToggleButton open={open} onClick={handleToggle} />
                    <div className="pl-5">{product.title}</div>
                    {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    <div className="text-xs font-light text-gray-500">{product.primary_variants.length} colors</div>
                </th>
                <td className="px-6 py-4">{product.inventory}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.discountPercentage}%</td>
                <td className="px-6 py-4">{colorArrayGenerate(product.primary_variants)}</td>
                <td className="px-6 py-4">{sizeArrayGenerate(product.primary_variants[0].secondary_variants)}</td>
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
