"use client"
import api, { allTrending, movieTrending, peopleTrending, seriesTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "../reutilizados/item";
import { Section } from "../reutilizados/section";

export const Main = () => {

    const [filmesAlta, setFilmesAlta] = useState([]);
    const [seriesAlta, setSeriesAlta] = useState([]);
    const [personAlta, setPersonAlta] = useState([]);
    const [allAlta, setAllAlta] = useState([]);

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

        const carregarAllEmAlta = async () => {
            const all = await allTrending();
            if(all) {
                setAllAlta(all);
            }
        }

        carregarFilmesEmAlta();
        carregarSeriesEmAlta();
        carregarPersonEmAlta();
        carregarAllEmAlta();

    }, []);
    return (
        <main className="mt-5">
            <section className="">
                <Section title="Filmes & Séries em Alta" list={allAlta}/>
                <Section title="Filmes em Alta" list={filmesAlta} />
                <Section title="Séries em Alta" list={seriesAlta}/>
                <Section title="Atores & Atrizes Famosos(a)" list={personAlta}/>
            </section>
        </main>
    );
}