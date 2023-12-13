export type Data = Product[];

export interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    inventory: string;
    active: boolean;
    leadTime: string;
    description: string;
    category: string;
    image: string;
    primary_variant_name: string;
    secondary_variant_name: string;
    primary_variants: PrimaryVariant[];
}

export interface PrimaryVariant {
    name: string;
    price: number;
    discountPercentage: number;
    inventory: number;
    active: boolean;
    secondary_variants: SecondaryVariant[];
}

export interface SecondaryVariant {
    name: string;
    price: number;
    discountPercentage: number;
    inventory: number;
}
