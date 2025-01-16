"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "./section";
import { useEffect, useState } from "react";
import { creditsFilmes, creditsSerie, detailsFilmes, detailsSeries, recommendationsFilmes, recommendationsSerie, similarFilmes, similarSerie } from "@/services/axiosConfig";
import { Elenco } from "./elenco";
import { MediaCastCrew, MovieDetails } from "@/types/movieType";
import { Equipe } from "./equipe";
import { TvShowResponse } from "@/types/tvType";
import { Detalhes } from "./detalhes";

type Props = {
    id: number;
    type: "movie" | "tv";
}

export const TableFooter = ({ id, type }: Props) => {

    const [listRecomendados, setListRecommendados] = useState([]);
    const [listSimilares, setListSimilares] = useState([]);
    const [listElenco, setListElenco] = useState<MediaCastCrew | null>(null);

    const [pageIdRecomendados, setPageIdRecomendados] = useState(1);
    const [pageIdSimilares, setPageIdSimilares] = useState(1);
    const [pageIdElenco, setPageIdElenco] = useState(1);

    const [responseDetailsMovie, setResponseDetailsMovie] = useState<MovieDetails | null>(null);


    if (type === "movie") {
        useEffect(() => {
            const carregarDetailsMovie = async () => {
                const details: MovieDetails = await detailsFilmes(id);
                if (details) {
                    //console.log(details.genres[0].name);
                    setResponseDetailsMovie(details);
                }
            }
            const carregarFilmesRecomendados = async () => {
                const movie = await recommendationsFilmes(id, pageIdRecomendados);
                if (movie) {
                    setListRecommendados(movie);
                }
            }
            const carregarFilmesSimilares = async () => {
                const movie = await similarFilmes(id, pageIdSimilares);
                if (movie) {
                    setListSimilares(movie);
                }
            }
            const carregarElenco = async () => {
                const elenco = await creditsFilmes(id);
                if (elenco) {
                    setListElenco(elenco);
                }
            }

            carregarDetailsMovie();
            carregarFilmesRecomendados();
            carregarFilmesSimilares();
            carregarElenco();
        }, [pageIdRecomendados, pageIdSimilares]);
    }

    const [responseDetailsTv, setResponseDetailsTv] = useState<TvShowResponse | null>(null);

    if (type === "tv") {
        useEffect(() => {
            const carregarDetailsTv = async () => {
                const details: TvShowResponse = await detailsSeries(id);
                if (details) {
                    //console.log(details.genres[0].name);
                    setResponseDetailsTv(details);
                }
            }
            const carregarSeriesRecomendados = async () => {
                const tv = await recommendationsSerie(id, pageIdRecomendados);
                if (tv) {
                    setListRecommendados(tv);
                }
            }
            const carregarSeriesSimilares = async () => {
                const tv = await similarSerie(id, pageIdSimilares);
                if (tv) {
                    setListSimilares(tv);
                }
            }
            const carregarElencoSerie = async () => {
                const elenco = await creditsSerie(id);
                if (elenco) {
                    setListElenco(elenco);
                }
            }
            carregarDetailsTv();
            carregarSeriesRecomendados();
            carregarSeriesSimilares();
            carregarElencoSerie();
        }, [pageIdRecomendados, pageIdSimilares]);
    }


    return (
        <div className="container mx-auto pb-10">
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
                    {
                        listSimilares.length === 0 && listRecomendados.length === 0 ? (
                            <p className="font-bold pt-5">Sem recomendações!</p>
                        ) : (
                            <>
                                {listSimilares.length > 0 && (
                                    <Section
                                        list={listSimilares}
                                        title="Similares"
                                        pageList={pageIdSimilares}
                                        setPageList={setPageIdSimilares}
                                        type={type}
                                    />
                                )}
                                {listRecomendados.length > 0 && (
                                    <Section
                                        list={listRecomendados}
                                        title="Recomendados"
                                        pageList={pageIdRecomendados}
                                        setPageList={setPageIdRecomendados}
                                        type={type}
                                    />
                                )}
                            </>
                        )
                    }
                </TabsContent>
                <TabsContent value="detalhes">
                    <Detalhes
                        listElenco={listElenco}
                        responseDetailsMovie={responseDetailsMovie}
                        responseDetailsTv={responseDetailsTv}
                        type={type}
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
};
