"use client"
import api, { movieTrending, peopleTrending, seriesTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "./item";
import { Section } from "./section";

export const Main = () => {

    const [filmesAlta, setFilmesAlta] = useState([]);
    const [seriesAlta, setSeriesAlta] = useState([]);
    const [personAlta, setPersonAlta] = useState([]);

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

        const carregarPersonEmAlta = async () => {
            const person = await peopleTrending();
            if(person) {
                setPersonAlta(person);
            }
        }

        carregarFilmesEmAlta();
        carregarSeriesEmAlta();
        carregarPersonEmAlta();

    }, []);
    return (
        <main className="mt-5">
            <section className="container mx-auto">
                <Section title="Filmes em Alta" list={filmesAlta} />
                <Section title="Séries em Alta" list={seriesAlta}/>
                <Section title="Atores & Atrizes Famosos(a)" list={personAlta}/>
            </section>
        </main>
    );
}