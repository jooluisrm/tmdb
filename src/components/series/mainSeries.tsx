"use client"

import { useEffect, useState } from "react";
import { Section } from "../reutilizados/section";
import { movieOrTv, seriesTrending } from "@/services/axiosConfig";

export const MainSeries = () => {

    // Lista Series
    const [seriesAlta, setSeriesAlta] = useState([])
    const [seriesNovos, setSeriesNovos] = useState([]);
    const [seriesPolular, setSeriesPolular] = useState([]);
    const [seriesClasificados, setSeriesClasificados] = useState([]);
    const [seriesEmBreve, setSeriesEmBreve] = useState([]);

    // Lista page Series
    const [pageAlta, setPageAlta] = useState(1); // nao funciona
    const [pageNews, setPageNews] = useState(1);
    const [pagePopular, setPagePopular] = useState(1);
    const [pageClasificados, setPageClasificados] = useState(1);
    const [pageEmBreve, setPageEmBreve] = useState(1);
    useEffect(() => {
        const carregarSeriesEmAlta = async () => {
            const series = await seriesTrending();
            if (series) {
                setSeriesAlta(series);
            }
        }
        const carregarSeriesNovas = async () => {
            const series = await movieOrTv(pageNews, {type: "tv", category: "airing_today"});
            if(series?.results) {
                setSeriesNovos(series.results);
            }
        }
        const carregarSeriesPopular = async () => {
            const series = await movieOrTv(pagePopular, {type: "tv", category: "popular"});
            if(series?.results) {
                setSeriesPolular(series.results);
            }
        }
        const carregarSeriesClasificadas = async () => {
            const series = await movieOrTv(pageClasificados, {type: "tv", category: "top_rated"});
            if(series?.results) {
                setSeriesClasificados(series.results);
            }
        }
        const carregarSeriesEmBreve = async () => {
            const series = await movieOrTv(pageEmBreve, {type: "tv", category: "on_the_air"});
            if(series?.results) {
                setSeriesEmBreve(series.results);
            }
        }

        carregarSeriesEmAlta();
        carregarSeriesNovas();
        carregarSeriesPopular();
        carregarSeriesEmBreve();
        carregarSeriesClasificadas();
    }, [pageNews, pagePopular, pageClasificados, pageEmBreve]);
    return (
        <main>
            <section className="">
                <Section title="Novidades do Dia" list={seriesNovos} type="tv" pageList={pageNews} setPageList={setPageNews} />
                <Section title="Séries em Alta" list={seriesAlta} type="tv" pageList={pageAlta} setPageList={setPageAlta} />
                <Section title="As Mais Populares" list={seriesPolular} type="tv" pageList={pagePopular} setPageList={setPagePopular} />
                <Section title="Top Avaliações" list={seriesClasificados} type="tv" pageList={pageClasificados} setPageList={setPageClasificados} />
                <Section title="Séries Que Estão Por Vir" list={seriesEmBreve} type="tv" pageList={pageEmBreve} setPageList={setPageEmBreve} />
            </section>
        </main>
    );
}