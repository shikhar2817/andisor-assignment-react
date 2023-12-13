"use client";
import { Button, Table, TableRow } from "@/components";
import { AddIcon, PuzzleIcon, UploadIcon } from "@/icons";

const columnList = ["Stock", "WHS", "Discount%", "Colour", "Sizes", "Inventory", "Lead Time"];

export default function Home() {
    const handleClick = () => {
        console.log("tes");
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
            <Table tableColumnList={columnList}>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            </Table>
        </h1>
    );
}
