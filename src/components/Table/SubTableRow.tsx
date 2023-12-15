import { PrimaryVariant, Product } from "@/types";
import React, { useState } from "react";
import { Badge } from "..";
import { ChevronDownIcon, ChevronUpIcon } from "@/icons";
import { sizeArrayGenerate } from "./TableRow";

interface Props {
    product: Product;
    primaryVariant: PrimaryVariant;
    edit: boolean;
}

export const SubTableRow: React.FC<Props> = ({ product, primaryVariant, edit }) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <tr className="bg-white border-b cursor-pointer">
                <th scope="row" className="px-2 pl-28 inline-flex py-4 font-medium text-gray-900 whitespace-nowrap">
                    {!edit ? (
                        <>{primaryVariant.name}</>
                    ) : (
                        <input
                            className="px-4 block w-80 bg-transparent disabled:bg-transparent"
                            defaultValue={primaryVariant.name}
                            disabled={!edit}
                        />
                    )}

                    {open ? <ChevronDownIcon onClick={handleToggle} /> : <ChevronUpIcon onClick={handleToggle} />}
                    <div
                        onClick={handleToggle}
                        className="text-xs pt-1 m-0 inline-block align-bottom font-light text-gray-500"
                    >
                        {primaryVariant.secondary_variants.length} sizes
                    </div>
                    {primaryVariant.active ? <Badge onClick={handleToggle}>Active</Badge> : <></>}
                </th>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        defaultValue={primaryVariant.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 w-full bg-transparent disabled:bg-transparent"
                        defaultValue={edit ? primaryVariant.price : `$${primaryVariant.price}`}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 w-full bg-transparent disabled:bg-transparent"
                        defaultValue={
                            edit ? primaryVariant.discountPercentage : `${primaryVariant.discountPercentage}%`
                        }
                        disabled={!edit}
                    />
                </td>

                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">{sizeArrayGenerate(primaryVariant.secondary_variants)}</td>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        defaultValue={primaryVariant.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        defaultValue={product.leadTime}
                        disabled={!edit}
                    />
                </td>
            </tr>
            {open ? (
                <>
                    {primaryVariant.secondary_variants.map((secondaryVariant, index) => {
                        return (
                            <tr className="bg-white border-b" key={`${secondaryVariant.name}-${index}`}>
                                <th scope="row" className="px-6 pl-40 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {!edit ? (
                                        <>{secondaryVariant.name}</>
                                    ) : (
                                        <input
                                            className="px-4 block w-80 bg-transparent disabled:bg-transparent"
                                            defaultValue={secondaryVariant.name}
                                            disabled={!edit}
                                        />
                                    )}
                                </th>
                                <td>
                                    <input
                                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                        defaultValue={secondaryVariant.inventory}
                                        disabled={!edit}
                                    />
                                </td>
                                <td>
                                    <input
                                        className="px-5 py-3 w-full bg-transparent disabled:bg-transparent"
                                        defaultValue={edit ? secondaryVariant.price : `$${secondaryVariant.price}`}
                                        disabled={!edit}
                                    />
                                </td>
                                <td>
                                    <input
                                        className="px-5 py-3 w-full bg-transparent disabled:bg-transparent"
                                        defaultValue={
                                            edit
                                                ? secondaryVariant.discountPercentage
                                                : `${secondaryVariant.discountPercentage}%`
                                        }
                                        disabled={!edit}
                                    />
                                </td>

                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td>
                                    <input
                                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                        defaultValue={secondaryVariant.inventory}
                                        disabled={!edit}
                                    />
                                </td>
                                <td>
                                    <input
                                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                        defaultValue={product.leadTime}
                                        disabled={!edit}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </>
            ) : null}
        </>
    );
};
