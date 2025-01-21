import { EpisodesSeason } from "@/types/seasonType";
import imgSemFoto from "../../../public/img/sem-foto.jpg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import imgNoCam from "../../../public/img/sem-foto.jpg";
import { MostrarTrailer } from "./mostrarTrailer";
import VideoYoutube from "./videoYoutube";
import { useEffect, useState } from "react";
import { videoEpisodes } from "@/services/axiosConfig";
import { ConvidadosEp } from "./convidadosEp";

type Props = {
    item: EpisodesSeason | null;
}

export const ItemEpisodio = ({ item }: Props) => {

    const [videoEp, setVideoEp] = useState(null);

    useEffect(() => {
        const pegarTrailer = async () => {
            if (item?.show_id != null) {
                const video = await videoEpisodes(item.show_id, item?.season_number, item?.episode_number);
                if (video) {
                    setVideoEp(video.results[0]);
                }
            }
        }

        pegarTrailer();
    }, []);

    return (

        <Dialog>
            <DialogTrigger className="text-start">
                <div className="bg-black text-gray-400 rounded-xl flex border hover:border-white hover:text-white transition-all duration-300">
                    <img
                        src={item?.still_path ? `https://image.tmdb.org/t/p/original/${item.still_path}` : imgSemFoto.src}
                        alt={item?.name}
                        className={item?.still_path ? `w-96 h-60 rounded-tl-xl rounded-bl-xl` : `w-96 h-60 rounded-tl-xl rounded-bl-xl`}
                    />
                    <div className="flex flex-col justify-center py-3 px-5 gap-1">
                        <h1 className="text-xl font-bold">{item?.episode_number} - {item?.name ? item.name : "Sem Título"}</h1>
                        <p className="py-4">{item?.overview ? item.overview : "Sem descrição..."}</p>
                        <p><span className="font-bold">{item?.air_date}</span></p>
                        <p className="font-bold">{item?.runtime ? item?.runtime : "0"} min</p>
                        <p><span className="font-bold">{item?.vote_average.toFixed(2)}</span> Avaliação</p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="min-w-[1000px] min-h-[550px]">
                <DialogHeader>
                    <DialogTitle>{item?.name}</DialogTitle>
                    <DialogDescription className="flex items-center gap-5">
                        <div className="h-96 flex-1">

                            <VideoYoutube trailer={videoEp} type={"trailerEp"}/>
                            {/*<img src={`https://image.tmdb.org/t/p/original/${item?.still_path}`} alt={item?.name} className="rounded-lg" />*/}
                            <p className="pt-5 px-5 text-white">{item?.overview}</p>
                            <div className="flex gap-3 w-full justify-center items-end pt-5 text-white">
                                <p>{item?.runtime && item.runtime} min</p>
                                ●
                                <p>{item?.air_date}</p>
                                ●
                                <p>{item?.vote_average.toFixed(2)}</p>
                            </div>

                        </div>
                        <div className="flex-1">
                            <ConvidadosEp item={item}/>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}