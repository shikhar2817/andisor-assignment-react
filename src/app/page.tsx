"use client";
import { Button } from "@/components";
import { ToggleButton } from "@/components/ToggleButton";
import { AddIcon, PuzzleIcon } from "@/icons";
import { UploadIcon } from "@/icons/UploadIcon";
import Image from "next/image";

export default function Home() {
    const handleClick = () => {
        console.log("tes");
    };
    return (
        <h1 className="text-3xl font-bold underline">
            <Button onClick={handleClick} variant="primary">
                <AddIcon />
                Export CSV
            </Button>

            <ToggleButton />
        </h1>
    );
}
