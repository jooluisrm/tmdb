"use client"

import { useEffect, useState } from "react";
import { Input } from "../reutilizados/input";
import { Section } from "../reutilizados/section";
import { Section2 } from "../reutilizados/section2";
import { allTrending } from "@/services/axiosConfig";

export const SearchMain = () => {

    const [inputSearch, setInputSearch] = useState("");
    const [allAlta, setAllAlta] = useState([]); 

    useEffect(() => {
        const carregarAllEmAlta = async () => {
            const all = await allTrending();
            if (all) {
                setAllAlta(all);
            }
        }
        carregarAllEmAlta();
    }, []);

    return (
        <main className="container mx-auto">
            <div>
                <Input />
            </div>

            <div>
                <Section2 title="Títulos populares" list={allAlta}/>
            </div>
        </main>
    );
}