"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "./section";
import { useEffect, useState } from "react";
import { recommendationsFilmes } from "@/services/axiosConfig";

type Props = {
    id: number;
}

export const TableFooter = ({ id }: Props) => {

    const [listRecomendados, setListRecommendados] = useState([]);

    const [pageIdRecomendados, setPageIdRecomendados] = useState(1);

    useEffect(() => {
        const carregarFilmesRecomendados = async () => {
            const movie = await recommendationsFilmes(id, pageIdRecomendados);
            if(movie) {
                setListRecommendados(movie);
            }
        }
        carregarFilmesRecomendados();
    }, [pageIdRecomendados]);

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
                    <Section list={listRecomendados} title="Recomendados" pageList={pageIdRecomendados} setPageList={setPageIdRecomendados}/>
                </TabsContent>
                <TabsContent value="detalhes">
                    Conteúdo de detalhes.
                </TabsContent>
            </Tabs>
        </div>
    );
};
