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
    handleSecondaryChange: (
        primaryIndex: number,
        secondryIndex: number,
        e: { target: { name: any; value: any } }
    ) => void;
}

export const SubTableRow: React.FC<Props> = ({
    product,
    primaryVariant,
    edit,
    subRowIndex,
    handleChange,
    handleSecondaryChange,
}) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <tr className="bg-white border-b">
                <th scope="row" className="px-2 pl-28 inline-flex py-4 font-medium text-gray-900 whitespace-nowrap">
                    {!edit ? (
                        <>{primaryVariant.name}</>
                    ) : (
                        <select
                            className="px-4 block w-52 bg-transparent disabled:bg-transparent"
                            name="name"
                            onChange={(e) => handleChange(subRowIndex, e)}
                            value={primaryVariant.name}
                        >
                            <option value="Choose a color" disabled>
                                Choose a color
                            </option>
                            <option value="Red"> Red</option>
                            <option value="Green"> Green</option>
                            <option value="Blue"> Blue</option>
                            <option value="Yellow">Yellow</option>
                            <option value="White"> White</option>
                        </select>
                    )}

                    {open ? <ChevronDownIcon onClick={handleToggle} /> : <ChevronUpIcon onClick={handleToggle} />}
                    <div
                        onClick={handleToggle}
                        className="cursor-pointer text-xs pt-1 m-0 inline-block align-bottom font-light text-gray-500"
                    >
                        {primaryVariant.secondary_variants.length} sizes
                    </div>
                    {primaryVariant.active ? (
                        <Badge className="cursor-pointer" onClick={handleToggle}>
                            Active
                        </Badge>
                    ) : (
                        <></>
                    )}
                </th>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        type="number"
                        name="inventory"
                        onChange={(e) => handleChange(subRowIndex, e)}
                        value={primaryVariant.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    {edit ? (
                        <input
                            className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                            type="number"
                            name="price"
                            value={primaryVariant.price}
                            onChange={(e) => handleChange(subRowIndex, e)}
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
                            value={primaryVariant.discountPercentage}
                            onChange={(e) => handleChange(subRowIndex, e)}
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
                        value={primaryVariant.inventory}
                        disabled={!edit}
                    />
                </td>
                <td>
                    <input
                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                        type="text"
                        name="leadTime"
                        onChange={(e) => handleChange(subRowIndex, e)}
                        value={product.leadTime}
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
                                            value={secondaryVariant.name}
                                            onChange={(e) => handleSecondaryChange(subRowIndex, index, e)}
                                        >
                                            <option value="Choose a size" disabled>
                                                Choose a size
                                            </option>
                                            <option value="Extra Small">Extra Small</option>
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                            <option value="Extra Large">Extra Large</option>
                                            <option value="Double Extra Large">Double Extra Large</option>
                                        </select>
                                    )}
                                </th>
                                <td>
                                    <input
                                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                        type="number"
                                        name="inventory"
                                        value={secondaryVariant.inventory}
                                        onChange={(e) => handleSecondaryChange(subRowIndex, index, e)}
                                        disabled={!edit}
                                    />
                                </td>
                                <td>
                                    {edit ? (
                                        <input
                                            className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                            type="number"
                                            name="price"
                                            value={secondaryVariant.price}
                                            onChange={(e) => handleSecondaryChange(subRowIndex, index, e)}
                                        />
                                    ) : (
                                        <span className="px-5 py-3 block w-full bg-transparent">{`$${secondaryVariant.price}`}</span>
                                    )}
                                </td>
                                <td>
                                    {edit ? (
                                        <input
                                            className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                            type="number"
                                            name="discountPercentage"
                                            value={secondaryVariant.discountPercentage}
                                            onChange={(e) => handleSecondaryChange(subRowIndex, index, e)}
                                        />
                                    ) : (
                                        <span className="px-5 py-3 block w-full bg-transparent">{`${secondaryVariant.discountPercentage}%`}</span>
                                    )}
                                </td>

                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td>
                                    <input
                                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                        type="number"
                                        name="inventory"
                                        value={secondaryVariant.inventory}
                                        onChange={(e) => handleSecondaryChange(subRowIndex, index, e)}
                                        disabled={!edit}
                                    />
                                </td>
                                <td>
                                    <input
                                        className="px-5 py-3 block w-full bg-transparent disabled:bg-transparent"
                                        type="text"
                                        name="leadTime"
                                        value={product.leadTime}
                                        onChange={(e) => handleSecondaryChange(subRowIndex, index, e)}
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
