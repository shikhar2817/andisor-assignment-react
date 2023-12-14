import React, { useState } from "react";
import { Badge, SubTableRow, ToggleButton } from "..";
import { PrimaryVariant, Product, SecondaryVariant, colorType } from "@/types";
import { ChevronDownIcon, ChevronUpIcon } from "@/icons";

interface Props {
    product: Product;
}

export const sizeArrayGenerate = (list: SecondaryVariant[]) => {
    let listString = "";
    let count = 0;
    for (let i = 0; i < Math.min(3, list.length); i++) {
        listString += list[i].name[0];
        if (i != 2) listString += ",";
    }
    if (list.length <= 3) return <div className="w-20 rounded-full">{listString}</div>;
    count = list.length - 3;
    listString += " +";
    listString += String(count);
    return <div className="w-20 rounded-full">{listString}</div>;
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
            <Badge color={list[0].name.toLowerCase() as colorType} className="m-[1px]" />
            <Badge color={list[1].name.toLowerCase() as colorType} className="m-[1px]" />
            <span className="ml-[2px] rounded-full">{`+${list.length - 2}`}</span>
        </div>
    );
};

export const TableRow: React.FC<Props> = ({ product }) => {
    const [prod, setProd] = useState(product);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <tr>
                <th
                    scope="row"
                    className="inline-flex items-center align-middle px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                    <ToggleButton open={open} onClick={handleToggle} />
                    {!edit ? (
                        <div className="pl-5">{prod.title}</div>
                    ) : (
                        <input
                            className="ml-2 pl-3 py-3 w-96 disabled:bg-transparent"
                            defaultValue={prod.title}
                            disabled={!edit}
                        />
                    )}

                    {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    <div className="text-xs font-light text-gray-500">{prod.primary_variants.length} colors</div>
                </th>
                <td>
                    <input
                        className="px-5 py-3 block w-full disabled:bg-transparent"
                        defaultValue={prod.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 w-full disabled:bg-transparent"
                        defaultValue={edit ? prod.price : `$${prod.price}`}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 block w-full disabled:bg-transparent"
                        defaultValue={edit ? prod.discountPercentage : `${prod.discountPercentage}%`}
                        disabled={!edit}
                    />
                </td>
                <td className="px-6 py-4">{colorArrayGenerate(prod.primary_variants)}</td>
                <td className="px-6 py-4">{sizeArrayGenerate(prod.primary_variants[0].secondary_variants)}</td>
                <td>
                    <input
                        className="px-5 py-3 block w-full disabled:bg-transparent"
                        defaultValue={prod.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 block w-full disabled:bg-transparent"
                        defaultValue={prod.leadTime}
                        disabled={!edit}
                    />
                </td>
            </tr>
            {open ? (
                <>
                    {prod.primary_variants.map((primaryVariant, index) => {
                        return (
                            <SubTableRow
                                key={`${primaryVariant.name}-${index}`}
                                product={prod}
                                primaryVariant={primaryVariant}
                            />
                        );
                    })}
                </>
            ) : null}
        </>
    );
};
