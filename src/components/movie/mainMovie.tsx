"use client"
import api, { allTrending, Categoria, movieOrTv, movieTrending, peopleTrending, seriesTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "../reutilizados/item";
import { Section } from "../reutilizados/section";
import { ThemeToggle } from "../reutilizados/ThemeToggle";

export const MainMovie = () => {

    // Lista filmes
    const [filmesAlta, setFilmesAlta] = useState([])
    const [filmesNovos, setFilmesNovos] = useState([]);
    const [filmesPolular, setFilmesPolular] = useState([]);
    const [filmesClasificados, setFilmesClasificados] = useState([]);
    const [filmesEmBreve, setFilmesEmBreve] = useState([]);

    // Lista page filmes
    const [pageAlta, setPageAlta] = useState(1); // nao funciona
    const [pageNews, setPageNews] = useState(1);
    const [pagePopular, setPagePopular] = useState(1);
    const [pageClasificados, setPageClasificados] = useState(1);
    const [pageEmBreve, setPageEmBreve] = useState(1);

    useEffect(() => {
        const carregarFilmesEmAlta = async () => {
            const movies = await movieTrending();
            if (movies) {
                setFilmesAlta(movies);
            }
        }
        const carregarFilmesNovos = async () => {
            const movies: any = await movieOrTv(pageNews, { type: "movie", category: "now_playing" });
            if (movies?.results) {
                setFilmesNovos(movies.results);
            }
        }
        const carregarFilmesPolular = async () => {
            const movies = await movieOrTv(pagePopular, { type: "movie", category: "popular" });
            if (movies?.results) {
                setFilmesPolular(movies.results);
            }
        }
        const carregarFilmesClasificados = async () => {
            const movie = await movieOrTv(pageClasificados, { type: "movie", category: "top_rated" });
            if (movie?.results) {
                setFilmesClasificados(movie.results);
            }
        }
        const carregarFilmesEmBreve = async () => {
            const movie = await movieOrTv(pageEmBreve, { type: "movie", category: "upcoming" });
            if (movie?.results) {
                setFilmesEmBreve(movie.results);
            }
        }

        carregarFilmesEmAlta();
        carregarFilmesNovos();
        carregarFilmesPolular();
        carregarFilmesClasificados();
        carregarFilmesEmBreve();

    }, [pageNews, pagePopular, pageClasificados, pageEmBreve]);

    return (
        <main className="bg-gradient-to-b from-black via-transparent to-transparent">
            <section className="pb-10">
                <ThemeToggle />
                <Section title="Estreias Recentes" list={filmesNovos} type={"movie"} pageList={pageNews} setPageList={setPageNews} />
                <Section title="Em Alta" list={filmesAlta} type={"movie"}/>
                <Section title="Populares" list={filmesPolular} type={"movie"} pageList={pagePopular} setPageList={setPagePopular} />
                <Section title="Mais Bem Avaliados" list={filmesClasificados} type={"movie"} pageList={pageClasificados} setPageList={setPageClasificados} />
                <Section title="Próximos Lançamentos" list={filmesEmBreve} type={"movie"} pageList={pageEmBreve} setPageList={setPageEmBreve} />
            </section>
        </main>
    );
}