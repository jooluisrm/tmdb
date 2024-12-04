"use client"
import api, { allTrending, movieNews, movieTrending, peopleTrending, seriesTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "../reutilizados/item";
import { Section } from "../reutilizados/section";

export const MainMovie = () => {

    // Lista filmes
    const [filmesAlta, setFilmesAlta] = useState([])
    const [filmesNovos, setFilmesNovos] = useState([]);
    
    // Lista page filmes
    const [pageAlta, setPageAlta] = useState(1);// nao funciona
    const [pageNews, setPageNews] = useState(1);
    

    useEffect(() => {
        const carregarFilmesEmAlta = async () => {
            const movies = await movieTrending();
            if (movies) {
                setFilmesAlta(movies);
            }
        }
        const carregarFilmesNovos = async () => {
            const movies = await movieNews(pageNews);
            if(movies) {
                setFilmesNovos(movies);
            }
        }

        carregarFilmesEmAlta();
        carregarFilmesNovos();

    }, [pageNews]);

    return (
        <main className="mt-5">
            <section className="">
                <Section title="Novos" list={filmesNovos} pageList={pageNews} setPageList={setPageNews}/>
                <Section title="Filmes em Alta" list={filmesAlta} pageList={pageAlta} setPageList={setPageAlta}/>
            </section>
        </main>
    );
}