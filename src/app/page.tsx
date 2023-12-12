"use client";
import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
    const handleClick = () => {
        console.log("tes");
    };
    return (
        <h1 className="text-3xl font-bold underline">
            <Button onClick={handleClick} variant="secondary">
                test
            </Button>
        </h1>
    );
}
