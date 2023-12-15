"use client";
import { useEffect, useState } from "react";
import { Button, Loading, Table, TableRow } from "@/components";
import { AddIcon, PuzzleIcon, UploadIcon } from "@/icons";
import { Data, TableColumnList } from "@/types";

const columnList: TableColumnList[] = [
    {
        title: "Stock",
        sortable: true,
    },
    {
        title: "WHS",
        sortable: true,
    },
    {
        title: "Discount",
        sortable: true,
        symbol: "%",
    },
    {
        title: "Colour",
    },
    {
        title: "Sizes",
    },
    {
        title: "Inventory",
    },
    {
        title: "Lead Time",
        sortable: true,
    },
];

export default function Home() {
    const [data, setData] = useState<Data>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://mocki.io/v1/c0f1b0df-0f5b-4f4b-84fa-60da0d131c27")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }, []);

    const handleClick = () => {
        console.log("Clicked");
    };

    return (
        <h1 className="text-3xl font-bold">
            <div className="flex justify-between items-center p-2 pb-0" role="group">
                <div>
                    <Button onClick={handleClick} variant="gaint" active="gaintActive">
                        Inventory
                    </Button>
                    <Button onClick={handleClick} variant="gaint">
                        Collections
                    </Button>
                    <Button onClick={handleClick} variant="gaint">
                        Analytics
                    </Button>
                </div>
                <div>
                    <Button onClick={handleClick} variant="primary">
                        <AddIcon />
                        Add New Product
                    </Button>
                    <Button onClick={handleClick} variant="secondary">
                        <PuzzleIcon />
                        Import Data
                    </Button>
                    <Button onClick={handleClick} variant="secondary">
                        <UploadIcon />
                        Export CSV
                    </Button>
                </div>
            </div>
            <hr className="h-px m-2 mt-0 mb-0 bg-gray-200 border-0 " />
            {isLoading ? (
                <Loading />
            ) : (
                <Table tableColumnList={columnList}>
                    {data.map((product, index) => {
                        return <TableRow product={product} key={product.id} productIndex={index} />;
                    })}
                </Table>
            )}
        </h1>
    );
}
