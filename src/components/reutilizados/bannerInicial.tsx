"use client"

import { bannerFilme, bannerSeries, detailsFilmes, detailsSeries, seasonDetails, seasonImagen, videoFilme, videoSeason, videoSerie } from "@/services/axiosConfig";
import { useEffect, useState } from "react";
import { MovieDetails } from "@/types/movieType";
import { MostrarTrailer } from "./mostrarTrailer";
import { TvShowResponse } from "@/types/tvType";
import { Temporadas } from "./temporadas";
import { DetailsSeason } from "@/types/seasonType";
import imgSemFoto from "../../../public/img/sem-foto.jpg";
import { Hand, Star, StarIcon, StarOff } from "lucide-react";

type Props = {
    idItem: number;
    type: "movie" | "tv" | "season";
    numTemp?: number;
}

export const BannerInicial = ({ idItem, type, numTemp }: Props) => {

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
                    setLinkBanner(banner[0].file_path);
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

    const [responseImg, setResponseImg] = useState(null);
    const [responseDetailsSeason, setResponseDetailsSeason] = useState<DetailsSeason | null>(null);
    const [responseTrailerSeason, setResponseTrailerSeason] = useState(null);
    const [date, setDate] = useState();

    if (type === "season" && numTemp) {
        useEffect(() => {
            const carregarBannerTv = async () => {
                const banner = await bannerSeries(idItem); // Chama a função para buscar banners
                if (banner && banner.length > 0) { // Verifica se existem banners disponíveis
                    const randomIndex = Math.floor(Math.random() * banner.length); // Gera um índice aleatório
                    setLinkBanner(banner[randomIndex].file_path); // Usa o índice para acessar o elemento
                } else {
                    console.log("Nenhum banner encontrado.");
                    return null;
                }
            };

            const carregarDetailsSeason = async () => {
                const details = await seasonDetails(idItem, numTemp);
                if (details) {
                    setResponseDetailsSeason(details);
                    // Use 'details' diretamente aqui
                    const [ano, mes, dia] = details.air_date.split("-");
                    setDate(ano);
                }
            };

            const carregarImg = async () => {
                const imgSeason = await seasonImagen(idItem, numTemp);
                if (imgSeason && imgSeason.length > 0) {
                    const randomIndex = Math.floor(Math.random() * imgSeason.length); // Gera um índice aleatório
                    setResponseImg(imgSeason[randomIndex].file_path);
                } else {
                    return null;
                }
            }

            const carregarTrailerSeason = async () => {
                const trailer = await videoSeason(idItem, numTemp);
                if (trailer) {
                    console.log(trailer.results[0]);
                    setResponseTrailerSeason(trailer.results[0]);
                }
            }

            carregarTrailerSeason();
            carregarDetailsSeason();
            carregarBannerTv();
            carregarImg();
        }, []);
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
        }} className={`h-screen w-full flex items-end`}>
            <div className="container mx-auto py-10">
                <div className="relative w-40 2xl:w-56">
                    {
                        type === "movie" &&
                        <img
                            src={responseDetailsMovie?.backdrop_path ? `https://image.tmdb.org/t/p/original/${responseDetailsMovie?.poster_path}` : imgSemFoto.src}
                            alt=""
                            className="rounded-lg w-full"
                        />
                    }
                    {
                        type === "tv" &&
                        <img
                            src={responseDetailsTv?.backdrop_path ? `https://image.tmdb.org/t/p/original/${responseDetailsTv?.poster_path}` : imgSemFoto.src}
                            alt=""
                            className="rounded-lg w-full"
                        />
                    }
                    {
                        type === "season" &&
                        <img
                            src={responseDetailsSeason?.poster_path ? `https://image.tmdb.org/t/p/original/${responseDetailsSeason?.poster_path}` : imgSemFoto.src}
                            alt=""
                            className="rounded-lg w-full"
                        />
                    }
                </div>

                <div className="my-5 font-bold text-5xl">
                    {responseDetailsMovie?.title && responseDetailsSeason?.name && responseDetailsTv?.name && "Sem Título"}
                    {type === "movie" && responseDetailsMovie?.title}
                    {type === "tv" && responseDetailsTv?.name}
                    {type === "season" && responseDetailsSeason?.name}
                </div>

                <div className="flex gap-2">
                    {
                        type === "movie"
                        &&
                        <MostrarTrailer trailer={responseTrailerMovie} detailsFilmes={responseDetailsMovie} />
                    }
                    {
                        type === "tv"
                        &&
                        <MostrarTrailer trailer={responseTrailerTv} detailsSeries={responseDetailsTv} />
                    }
                    {
                        type === "season"
                        &&
                        <MostrarTrailer trailer={responseTrailerSeason} detailsSeason={responseDetailsSeason}/>
                    }
                    {
                        type === "tv" && <Temporadas details={responseDetailsTv} />
                    }
                </div>

                <div className="flex gap-3 py-2">
                    {
                        type === "movie" && responseDetailsMovie?.genres.map((item) => (
                            <p className="font-bold">{item.name}</p>
                        ))
                    }
                    {
                        type === "tv" && responseDetailsTv?.genres.map((item) => (
                            <p className="font-bold">{item.name}</p>
                        ))
                    }
                    {
                        type === "season" &&
                        <div className="text-lg text-gray-300 flex gap-2">
                            <p><span className="font-extrabold">{responseDetailsSeason?.episodes.length}x{responseDetailsSeason?.season_number}</span></p>
                            ●
                            <p><span className="font-extrabold">{responseDetailsSeason?.air_date ? date : "Sem Data"}</span></p>
                            ●
                            <p><span className="font-bold items-center flex">{responseDetailsSeason?.vote_average ? responseDetailsSeason.vote_average : <StarOff size={25} />}</span></p>
                        </div>
                    }
                </div>
                {
                    !responseDetailsMovie?.overview && !responseDetailsTv?.overview && !responseDetailsSeason?.overview ? "Sem descrição..." :
                        <div className="w-[800px] text-lg text-gray-400 shadow-lg overflow-y-scroll scrollbar-track-transparent max-h-32 2xl:w-[1000px]">
                            {type === "movie" && responseDetailsMovie?.overview}
                            {type === "tv" && responseDetailsTv?.overview}
                            {type === "season" && responseDetailsSeason?.overview}
                        </div>
                }
            </div>
        </div>
    );
}