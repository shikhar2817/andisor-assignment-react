export type Data = Product[];

export interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    inventory: number;
    active: boolean;
    leadTime: string;
    description: string;
    category: string;
    image: string;
    primary_variant_name: string;
    secondary_variant_name: string;
    primary_variants: PrimaryVariant[];
}

export type ProductDataTypeValues = number | string | boolean;
export type ProductKeyValues = "title" | "price" | "discountPercentage" | "inventory" | "leadTime";

export interface PrimaryVariant {
    name: string;
    price: number;
    discountPercentage: number;
    inventory: number;
    active: boolean;
    secondary_variants: SecondaryVariant[];
}

export type PrimaryVariantDataTypeValues = number | string | boolean;
export type PrimaryVariantKeyValues = "name" | "price" | "discountPercentage" | "inventory";

export interface SecondaryVariant {
    name: string;
    price: number;
    discountPercentage: number;
    inventory: number;
}

export type SecondaryVariantDataTypeValues = string | number;
export type SecondaryVariantKeyValues = "name" | "price" | "discountPercentage" | "inventory";
