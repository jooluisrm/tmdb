"use client"
import api, { allTrending, Categoria, movieOrTv, movieTrending, peopleTrending, seriesTrending } from "@/services/axiosConfig";
import { Movie } from "@/types/movieType";
import { useEffect, useState } from "react";
import { Item } from "../reutilizados/item";
import { Section } from "../reutilizados/section";

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
            const movies = await movieOrTv(pageNews, { type: "movie", category: "now_playing" });
            if (movies) {
                setFilmesNovos(movies);
            }
        }
        const carregarFilmesPolular = async () => {
            const movies = await movieOrTv(pagePopular, { type: "movie", category: "popular" });
            if (movies) {
                setFilmesPolular(movies);
            }
        }
        const carregarFilmesClasificados = async () => {
            const movie = await movieOrTv(pageClasificados, { type: "movie", category: "top_rated" });
            if (movie) {
                setFilmesClasificados(movie);
            }
        }
        const carregarFilmesEmBreve = async () => {
            const movie = await movieOrTv(pageEmBreve, { type: "movie", category: "upcoming" });
            if (movie) {
                setFilmesEmBreve(movie);
            }
        }

        carregarFilmesEmAlta();
        carregarFilmesNovos();
        carregarFilmesPolular();
        carregarFilmesClasificados();
        carregarFilmesEmBreve();

    }, [pageNews, pagePopular, pageClasificados, pageEmBreve]);

    return (
        <main className="mt-5">
            <section className="">
                <Section title="Estreias Recentes" list={filmesNovos} pageList={pageNews} setPageList={setPageNews} />
                <Section title="Em Alta" list={filmesAlta} pageList={pageAlta} setPageList={setPageAlta} />
                <Section title="Populares" list={filmesPolular} pageList={pagePopular} setPageList={setPagePopular} />
                <Section title="Mais Bem Avaliados" list={filmesClasificados} pageList={pageClasificados} setPageList={setPageClasificados} />
                <Section title="Próximos Lançamentos" list={filmesEmBreve} pageList={pageEmBreve} setPageList={setPageEmBreve} />
            </section>
        </main>
    );
}