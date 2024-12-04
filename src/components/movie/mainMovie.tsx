"use client"
import api, { allTrending, movieNews, moviePopular, movieTrending, peopleTrending, seriesTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "../reutilizados/item";
import { Section } from "../reutilizados/section";

export const MainMovie = () => {

    // Lista filmes
    const [filmesAlta, setFilmesAlta] = useState([])
    const [filmesNovos, setFilmesNovos] = useState([]);
    const [filmesPolular, setFilmesPolular] = useState([]);
    
    // Lista page filmes
    const [pageAlta, setPageAlta] = useState(1); // nao funciona
    const [pageNews, setPageNews] = useState(1);
    const [pagePopular, setPagePopular] = useState(1);
    

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
        const carregarFilmesPolular = async () => {
            const movies = await moviePopular(pagePopular);
            if(movies) {
                setFilmesPolular(movies);
            }
        }

        carregarFilmesEmAlta();
        carregarFilmesNovos();
        carregarFilmesPolular();

    }, [pageNews, pagePopular]);

    return (
        <main className="mt-5">
            <section className="">
                <Section title="Novos" list={filmesNovos} pageList={pageNews} setPageList={setPageNews}/>
                <Section title="Em Alta" list={filmesAlta} pageList={pageAlta} setPageList={setPageAlta}/>
                <Section title="Populares" list={filmesPolular} pageList={pagePopular} setPageList={setPagePopular}/>
            </section>
        </main>
    );
}