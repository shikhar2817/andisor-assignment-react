import { PrimaryVariant, Product } from "@/types";
import React, { useState } from "react";
import { Badge } from "..";
import { ChevronDownIcon, ChevronUpIcon } from "@/icons";
import { sizeArrayGenerate } from "./TableRow";

interface Props {
    product: Product;
    primaryVariant: PrimaryVariant;
    edit: boolean;
    subRowIndex: number;
    handleChange: (index: number, e: { target: { name: any; value: any } }) => void;
}

export const SubTableRow: React.FC<Props> = ({ product, primaryVariant, edit, subRowIndex, handleChange }) => {
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
                        <select
                            className="px-4 block w-52 bg-transparent disabled:bg-transparent"
                            name="name"
                            onChange={(e) => handleChange(subRowIndex, e)}
                            disabled={!edit}
                        >
                            <option selected>Choose a color</option>
                            <option value="Red" selected={primaryVariant.name === "Red"}>
                                Red
                            </option>
                            <option value="Green" selected={primaryVariant.name === "Green"}>
                                Green
                            </option>
                            <option value="Blue" selected={primaryVariant.name === "Blue"}>
                                Blue
                            </option>
                            <option value="Yellow" selected={primaryVariant.name === "Yellow"}>
                                Yellow
                            </option>
                            <option value="White" selected={primaryVariant.name === "White"}>
                                White
                            </option>
                        </select>
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
                        type="number"
                        name="inventory"
                        onChange={(e) => handleChange(subRowIndex, e)}
                        defaultValue={primaryVariant.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    {edit ? (
                        <input
                            className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                            type="number"
                            name="price"
                            defaultValue={primaryVariant.price}
                            onChange={(e) => handleChange(subRowIndex, e)}
                            disabled={!edit}
                        />
                    ) : (
                        <span className="px-5 py-3 block w-full bg-transparent">{`$${primaryVariant.price}`}</span>
                    )}
                </td>
                <td>
                    {edit ? (
                        <input
                            className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                            type="number"
                            name="discountPercentage"
                            defaultValue={primaryVariant.discountPercentage}
                            onChange={(e) => handleChange(subRowIndex, e)}
                            disabled={!edit}
                        />
                    ) : (
                        <span className="px-5 py-3 block w-full bg-transparent">{`${primaryVariant.discountPercentage}%`}</span>
                    )}
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">{sizeArrayGenerate(primaryVariant.secondary_variants)}</td>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        type="number"
                        name="inventory"
                        onChange={(e) => handleChange(subRowIndex, e)}
                        defaultValue={primaryVariant.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        type="text"
                        name="leadTime"
                        onChange={(e) => handleChange(subRowIndex, e)}
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
                                        <select
                                            className="px-4 block w-52 bg-transparent disabled:bg-transparent"
                                            name="name"
                                            // onChange={(e) => handleChange(subRowIndex, e)}
                                            disabled={!edit}
                                        >
                                            <option selected>Choose a color</option>
                                            <option
                                                value="Extra Small"
                                                selected={secondaryVariant.name === "Extra Small"}
                                            >
                                                Extra Small
                                            </option>
                                            <option value="Small" selected={secondaryVariant.name === "Small"}>
                                                Small
                                            </option>
                                            <option value="Medium" selected={secondaryVariant.name === "Medium"}>
                                                Medium
                                            </option>
                                            <option value="Large" selected={secondaryVariant.name === "Large"}>
                                                Large
                                            </option>
                                            <option
                                                value="Extra Large"
                                                selected={secondaryVariant.name === "Extra Large"}
                                            >
                                                Extra Large
                                            </option>
                                        </select>
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
