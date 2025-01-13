"use client"

import { bannerFilme, detailsFilmes } from "@/services/axiosConfig";
import { useEffect, useState } from "react";
import { MovieDetails } from "@/types/movieType";
import { PlayIcon } from "lucide-react";

type Props = {
    idItem: number;
}

export const BannerInicial = ({ idItem }: Props) => {

    const [linkBanner, setLinkBanner] = useState("");
    const [responseDetails, setResponseDetails] = useState<MovieDetails | null>(null);

    useEffect(() => {
        const carregarBanner = async () => {
            const banner = await bannerFilme(idItem);
            console.log(banner);
            if (banner) {
                setLinkBanner(banner);
            }

        }
        const carregarDetails = async () => {
            const details: MovieDetails = await detailsFilmes(idItem);
            if (details) {
                console.log(details.genres[0].name);
                setResponseDetails(details);
            }
        }

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
            <div className="px-10 py-10">
                <div>
                    <img src={`https://image.tmdb.org/t/p/original/${responseDetails?.poster_path}`} alt="" className="w-40 2xl:w-56"/>
                </div>
                <div className="my-5 font-bold text-5xl">{responseDetails?.title}</div>

                <button className="flex gap-2 bg-white text-black py-3 px-10 rounded-md font-bold w-full justify-center min-w-80 max-w-80"><PlayIcon className=""/> Ver trailer</button>
                <div className="flex gap-3 py-2">
                    {responseDetails?.genres.map((item) => (
                        <p className="font-bold">{item.name}</p>
                    ))}
                </div>
                <div className="w-[800px] text-lg text-gray-400 shadow-lg 2xl:w-[1000px]">{responseDetails?.overview}</div>

            </div>
        </div>
    );
}