"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "./section";
import { useEffect, useState } from "react";
import { creditsFilmes, recommendationsFilmes, similarFilmes } from "@/services/axiosConfig";
import { Elenco } from "./elenco";
import { MediaCastCrew } from "@/types/movieType";

type Props = {
    id: number;
}

export const TableFooter = ({ id }: Props) => {

    const [listRecomendados, setListRecommendados] = useState([]);
    const [listSimilares, setListSimilares] = useState([]);
    const [listElenco, setListElenco] = useState<MediaCastCrew | any>();

    const [pageIdRecomendados, setPageIdRecomendados] = useState(1);
    const [pageIdSimilares, setPageIdSimilares] = useState(1);
    const [pageIdElenco, setPageIdElenco] = useState(1)

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
                setListSimilares(movie);
            }
        }
        const carregarElenco = async () => {
            const elenco = await creditsFilmes(id);
            if(elenco) {
                setListElenco(elenco);
            }
        }
        carregarFilmesRecomendados();
        carregarFilmesSimilares();
        carregarElenco();
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
                    <Section list={listSimilares} title="Similares" pageList={pageIdSimilares} setPageList={setPageIdSimilares} type="movie"/>
                    <Section list={listRecomendados} title="Recomendados" pageList={pageIdRecomendados} setPageList={setPageIdRecomendados} type="movie"/>
                </TabsContent>
                <TabsContent value="detalhes">
                    <Elenco listElenco={listElenco}/>
                </TabsContent>
            </Tabs>
        </div>
    );
};
