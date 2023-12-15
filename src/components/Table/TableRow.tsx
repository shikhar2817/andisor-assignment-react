import React, { useState } from "react";
import { Badge, Button, SubTableRow, ToggleButton } from "..";
import { PrimaryVariant, Product, SecondaryVariant, colorType } from "@/types";
import { ChevronDownIcon, ChevronUpIcon, FloppyDiskIcon, PencilIcon } from "@/icons";
import { cn } from "@/utils";

interface Props {
    product: Product;
    productIndex: number;
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

export const TableRow: React.FC<Props> = ({ product, productIndex }) => {
    const [prod, setProd] = useState(product);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleSave = () => {
        setEdit(false);
    };

    const handleProductChange = (e: { target: { name: any; value: any } }) => {
        setProd({ ...prod, [e.target.name]: e.target.value });
    };

    const handlePrimaryVariantChange = (index: number, e: { target: { name: any; value: any } }) => {
        if (e.target.name === "leadTime") {
            setProd({ ...prod, [e.target.name]: e.target.value });
            return;
        }
        let newPV = { ...prod.primary_variants[index], [e.target.name]: e.target.value };
        let PVarray = prod.primary_variants;
        PVarray[index] = newPV;
        setProd({ ...prod, primary_variants: PVarray });
    };

    const handleSecondaryVariantChange = (
        primaryIndex: number,
        secondryIndex: number,
        e: { target: { name: any; value: any } }
    ) => {
        if (e.target.name === "leadTime") {
            setProd({ ...prod, [e.target.name]: e.target.value });
            return;
        }
        let newSV = {
            ...prod.primary_variants[primaryIndex].secondary_variants[secondryIndex],
            [e.target.name]: e.target.value,
        };
        let SVarray = prod.primary_variants[primaryIndex].secondary_variants;
        SVarray[secondryIndex] = newSV;

        let PVarray = prod.primary_variants;
        PVarray[primaryIndex].secondary_variants = SVarray;
        setProd({ ...prod, primary_variants: PVarray });
    };

    return (
        <>
            <tr className={cn("cursor-pointer", open ? "bg-purple-200" : "")}>
                <th
                    scope="row"
                    className="inline-flex items-center align-middle px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                    <ToggleButton open={open} onClick={handleToggle} />
                    {!edit ? (
                        <div className="pl-5">{prod.title}</div>
                    ) : (
                        <input
                            className="ml-2 pl-3 py-3 w-96 bg-transparent disabled:bg-transparent"
                            type="text"
                            name="title"
                            defaultValue={prod.title}
                            onChange={handleProductChange}
                        />
                    )}

                    {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    <div className="text-xs font-light text-gray-500">{prod.primary_variants.length} colors</div>
                    {open && (
                        <>
                            {edit ? (
                                <Button
                                    variant="secondary"
                                    className="text-purple-500 hover:bg-purple-200 hover:text-purple-700 mx-1 active:text-white"
                                    onClick={handleSave}
                                >
                                    {" "}
                                    <FloppyDiskIcon /> Save
                                </Button>
                            ) : (
                                <Button
                                    variant="secondary"
                                    className="text-purple-500 hover:bg-purple-200 hover:text-purple-700 mx-1 active:text-white"
                                    onClick={handleEdit}
                                >
                                    {" "}
                                    <PencilIcon /> Edit
                                </Button>
                            )}
                        </>
                    )}
                </th>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        type="number"
                        name="inventory"
                        defaultValue={prod.inventory}
                        onChange={handleProductChange}
                        disabled={!edit}
                    />
                </td>
                <td>
                    {edit ? (
                        <input
                            type="number"
                            name="price"
                            className="px-5 py-3 w-full bg-transparent disabled:bg-transparent"
                            defaultValue={prod.price}
                            onChange={handleProductChange}
                        />
                    ) : (
                        <span className="px-5 py-3 block w-full bg-transparent">{`$${prod.price}`}</span>
                    )}
                </td>
                <td>
                    {edit ? (
                        <input
                            className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                            type="number"
                            name="discountPercentage"
                            defaultValue={prod.discountPercentage}
                            onChange={handleProductChange}
                        />
                    ) : (
                        <span className="px-5 py-3 block w-full bg-transparent">{`${prod.discountPercentage}%`}</span>
                    )}
                </td>
                <td className="px-6 py-4">{colorArrayGenerate(prod.primary_variants)}</td>
                <td className="px-6 py-4">{sizeArrayGenerate(prod.primary_variants[0].secondary_variants)}</td>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        type="number"
                        name="inventory"
                        defaultValue={prod.inventory}
                        onChange={handleProductChange}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        type="text"
                        name="leadTime"
                        value={prod.leadTime}
                        onChange={handleProductChange}
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
                                edit={edit}
                                handleChange={handlePrimaryVariantChange}
                                handleSecondaryChange={handleSecondaryVariantChange}
                                subRowIndex={index}
                            />
                        );
                    })}
                </>
            ) : null}
        </>
    );
};
