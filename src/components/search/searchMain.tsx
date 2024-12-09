"use client"

import { useEffect, useState } from "react";
import { Input } from "../reutilizados/input";
import { Section } from "../reutilizados/section";
import { Section2 } from "../reutilizados/section2";
import { allTrending, searchMult } from "@/services/axiosConfig";


export const SearchMain = () => {

    const [inputSearch, setInputSearch] = useState("");
    const [allAlta, setAllAlta] = useState([]);
    const [searchList, setSearchList] = useState([]);

    const [pageSearch, setPageSearch] = useState(1);

    const carregarSearchMult = async () => {
        const search = await searchMult(pageSearch, inputSearch);
        if (search) {
            setSearchList(search);
        }
    }

    useEffect(() => {
        const carregarAllEmAlta = async () => {
            const all = await allTrending();
            if (all) {
                setAllAlta(all);
            }
        }
        
        carregarAllEmAlta();
        
    }, [searchList]);
    return (
        <main className="container mx-auto">
            <div>
                <Input inputSearch={inputSearch} setInputSearch={setInputSearch} onPress={carregarSearchMult}/>
            </div>
            {
                inputSearch.trim().length === 0 ?
                    <div>
                        <Section2 title="Títulos populares" list={allAlta} />
                    </div>
                :
                    <div>
                        <Section2 title={`Resultado: ${inputSearch}`} list={searchList}/>
                    </div>
            }

        </main>
    );
}