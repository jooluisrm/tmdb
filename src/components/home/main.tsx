"use client"
import api, { movieTrending, seriesTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "./item";
import { Section } from "./section";

export const Main = () => {

    const [filmesAlta, setFilmesAlta] = useState([]);
    const [seriesAlta, setSeriesAlta] = useState([]);

    useEffect(() => {
        const carregarFilmesEmAlta = async () => {
            const movies = await movieTrending();
            if (movies) {
                setFilmesAlta(movies);
            }
        }

        const carregarSeriesEmAlta = async () => {
            const series = await seriesTrending();
            if(series) {
                setSeriesAlta(series);
            }
        }
        carregarFilmesEmAlta();
        carregarSeriesEmAlta();

    }, []);
    return (
        <main className="mt-5">
            <section className="container mx-auto">
                <Section title="Filmes em Alta" list={filmesAlta} />
                <Section title="Séries em Alta" list={seriesAlta}/>
            </section>
        </main>
    );
}