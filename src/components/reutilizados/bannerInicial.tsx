"use client"

import { bannerFilme, bannerSeries, detailsFilmes, detailsSeries, videoFilme, videoSerie } from "@/services/axiosConfig";
import { useEffect, useState } from "react";
import { MovieDetails } from "@/types/movieType";
import { PlayIcon } from "lucide-react";
import { MostrarTrailer } from "./mostrarTrailer";
import { TvShowResponse } from "@/types/tvType";
import { ButtonBannerInicial } from "./buttonBannerInicial";
import { Temporadas } from "./temporadas";

type Props = {
    idItem: number;
    type: "movie" | "tv";
}

export const BannerInicial = ({ idItem, type }: Props) => {

    const [linkBanner, setLinkBanner] = useState("");

    const [responseDetailsMovie, setResponseDetailsMovie] = useState<MovieDetails | null>(null);
    const [responseTrailerMovie, setResponseTrailerMovie] = useState(null);

    if (type === "movie") {
        useEffect(() => {
            const carregarBannerMovie = async () => {
                const banner = await bannerFilme(idItem);
                //console.log(banner);
                if (banner) {
                    setLinkBanner(banner);
                }

            }
            const carregarDetailsMovie = async () => {
                const details: MovieDetails = await detailsFilmes(idItem);
                if (details) {
                    //console.log(details.genres[0].name);
                    setResponseDetailsMovie(details);
                }
            }
            const carregarTrailerMovie = async () => {
                const trailer = await videoFilme(idItem);
                if (trailer) {
                    console.log(trailer.results[0]);
                    setResponseTrailerMovie(trailer.results[0]);
                }
            }

            carregarTrailerMovie();
            carregarDetailsMovie();
            carregarBannerMovie();
        }, [idItem]);
    }

    const [responseDetailsTv, setResponseDetailsTv] = useState<TvShowResponse | null>(null);
    const [responseTrailerTv, setResponseTrailerTv] = useState(null);


    if (type === "tv") {
        useEffect(() => {
            const carregarBannerTv = async () => {
                const banner = await bannerSeries(idItem);
                //console.log(banner);
                if (banner) {
                    setLinkBanner(banner);
                }
            }
            const carregarDetailsTv = async () => {
                const details: TvShowResponse = await detailsSeries(idItem);
                if (details) {
                    //console.log(details.genres[0].name);
                    setResponseDetailsTv(details);
                }
            }
            const carregarTrailerTv = async () => {
                const trailer = await videoSerie(idItem);
                if (trailer) {
                    console.log(trailer.results[0]);
                    setResponseTrailerTv(trailer.results[0]);
                }
            }

            carregarTrailerTv();
            carregarDetailsTv();
            carregarBannerTv();
        }, [idItem]);
    }


    return (
        <div style={{
            backgroundImage: `
        linear-gradient(to right, black 0%, transparent 50%), 
        linear-gradient(to top,  black 5%, transparent 50%),
        url(https://image.tmdb.org/t/p/original${linkBanner})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className="h-screen w-full flex items-end">
            <div className="container mx-auto py-10">
                <div className="relative w-40 2xl:w-56">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${type === "movie" ? responseDetailsMovie?.poster_path : responseDetailsTv?.poster_path}`}
                        alt=""
                        className="rounded-lg w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
                </div>

                <div className="my-5 font-bold text-5xl">{type === "movie" ? responseDetailsMovie?.title : responseDetailsTv?.name}</div>

                <div className="flex gap-2">
                    {
                        type === "movie"
                            ?
                            <MostrarTrailer trailer={responseTrailerMovie} detailsFilmes={responseDetailsMovie} />
                            :
                            <MostrarTrailer trailer={responseTrailerTv} detailsSeries={responseDetailsTv} />
                    }
                    {
                        type === "tv" && <Temporadas details={responseDetailsTv} />
                    }
                </div>

                <div className="flex gap-3 py-2">
                    {
                        type === "movie" ? responseDetailsMovie?.genres.map((item) => (
                            <p className="font-bold">{item.name}</p>
                        )) :
                            responseDetailsTv?.genres.map((item) => (
                                <p className="font-bold">{item.name}</p>
                            ))
                    }
                </div>
                {
                    !responseDetailsMovie?.overview && !responseDetailsTv?.overview ? "Sem descrição..." :
                        <div className="w-[800px] text-lg text-gray-400 shadow-lg overflow-y-scroll scrollbar-track-transparent max-h-32 2xl:w-[1000px]">
                            {type === "movie" ? responseDetailsMovie?.overview : responseDetailsTv?.overview}
                        </div>
                }
            </div>
        </div>
    );
}