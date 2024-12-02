"use client"
import api, { movieTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "./item";
import { Section } from "./section";

export const Main = () => {

    const [filmesAlta, setFilmesAlta] = useState([]);

    useEffect(() => {
        const carregarFilmesEmAlta = async () => {
            const movies = await movieTrending();
            if (movies) {
                setFilmesAlta(movies);
            }
        }
        carregarFilmesEmAlta();

    }, []);
    return (
        <main className="mt-5">
            <section className="container mx-auto">
                <Section title="Filmes em Alta" list={filmesAlta}/>

            </section>
        </main>
    );
}