"use client"

import { bannerFilme, detailsFilmes, videoFilme } from "@/services/axiosConfig";
import { useEffect, useState } from "react";
import { MovieDetails } from "@/types/movieType";
import { PlayIcon } from "lucide-react";
import { MostrarTrailer } from "./mostrarTrailer";

type Props = {
    idItem: number;
}

export const BannerInicial = ({ idItem }: Props) => {

    const [linkBanner, setLinkBanner] = useState("");
    const [responseDetails, setResponseDetails] = useState<MovieDetails | null>(null);
    const [trailerMovie, setTrailerMovie] = useState(null);

    useEffect(() => {
        const carregarBanner = async () => {
            const banner = await bannerFilme(idItem);
            //console.log(banner);
            if (banner) {
                setLinkBanner(banner);
            }

        }
        const carregarDetails = async () => {
            const details: MovieDetails = await detailsFilmes(idItem);
            if (details) {
                //console.log(details.genres[0].name);
                setResponseDetails(details);
            }
        }
        const carregarTrailer = async () => {
            const trailer = await videoFilme(idItem);
            if(trailer) {
                console.log(trailer.results[0]);
                setTrailerMovie(trailer.results[0]);
            }
        }

        carregarTrailer();
        carregarDetails();
        carregarBanner();
    }, [idItem])

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
                <div>
                    <img src={`https://image.tmdb.org/t/p/original/${responseDetails?.poster_path}`} alt="" className="w-40 2xl:w-56"/>
                </div>
                <div className="my-5 font-bold text-5xl">{responseDetails?.title}</div>

                <MostrarTrailer trailer={trailerMovie} detailsFilmes={responseDetails}/>
                <div className="flex gap-3 py-2">
                    {responseDetails?.genres.map((item) => (
                        <p className="font-bold">{item.name}</p>
                    ))}
                </div>
                <div className="w-[800px] text-lg text-gray-400 shadow-lg overflow-y-scroll scrollbar-track-transparent h-32 2xl:w-[1000px]">
                    {responseDetails?.overview}
                </div>

            </div>
        </div>
    );
}