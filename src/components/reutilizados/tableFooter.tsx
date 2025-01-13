"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "./section";
import { useEffect, useState } from "react";
import { recommendationsFilmes, similarFilmes } from "@/services/axiosConfig";

type Props = {
    id: number;
}

export const TableFooter = ({ id }: Props) => {

    const [listRecomendados, setListRecommendados] = useState([]);
    const [listSimilares, setListeSimilares] = useState([]);

    const [pageIdRecomendados, setPageIdRecomendados] = useState(1);
    const [pageIdSimilares, setPageIdSimilares] = useState(1);

    useEffect(() => {
        const carregarFilmesRecomendados = async () => {
            const movie = await recommendationsFilmes(id, pageIdRecomendados);
            if(movie) {
                setListRecommendados(movie);
            }
        }
        const carregarFilmesSimilares = async () => {
            const movie = await similarFilmes(id, pageIdSimilares);
            if(movie) {
                setListeSimilares(movie);
            }
        }
        carregarFilmesRecomendados();
        carregarFilmesSimilares();
    }, [pageIdRecomendados, pageIdSimilares]);

    return (
        <div className="container mx-auto">
            <Tabs defaultValue="recomendados" className="w-full">
                <TabsList className="bg-transparent">
                    <TabsTrigger
                        value="recomendados"
                        className="text-xl font-bold bg-transparent aria-selected:bg-transparent"
                    >
                        Você também pode gostar
                    </TabsTrigger>
                    <TabsTrigger
                        value="detalhes"
                        className="text-xl font-bold bg-transparent aria-selected:bg-transparent"
                    >
                        Detalhes
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="recomendados">
                    <Section list={listSimilares} title="Similares" pageList={pageIdSimilares} setPageList={setPageIdSimilares}/>
                    <Section list={listRecomendados} title="Recomendados" pageList={pageIdRecomendados} setPageList={setPageIdRecomendados}/>
                </TabsContent>
                <TabsContent value="detalhes">
                    Conteúdo de detalhes.
                </TabsContent>
            </Tabs>
        </div>
    );
};
