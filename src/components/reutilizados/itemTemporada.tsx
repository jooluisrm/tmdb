import { SeasonTv, TvShowResponse } from "@/types/tvType";
import imgSemFoto from "../../../public/img/sem-foto.jpg";
import Link from "next/link";

type Props = {
    item: SeasonTv | null;
    details: TvShowResponse | null;
}

export const ItemTemporada = ({ item, details }: Props) => {

    if (item && details)
        return (
            <>
                <Link href={`${details.id}/season/${item.season_number}`}>
                    <div key={item.id} className="bg-black flex rounded-xl transition-all border border-black duration-200 hover:text-white hover:border-white">
                        <img src={!item.poster_path ? imgSemFoto.src : `https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.name} className="w-40 h-64 rounded-tl-xl rounded-bl-xl" />
                        <div className="py-5 px-5 flex flex-col justify-center">
                            <h1 className="font-extrabold text-xl">{item.name}</h1>
                            <p className="pb-5"><span className="font-bold">{item.episode_count <= 9 ? "0" + item.episode_count : item.episode_count}</span> Episódios</p>
                            <div className="flex flex-col gap-1">
                                <p className="overflow-y-scroll h-28">{item.overview ? item.overview : details.overview ? details.overview : "Sem descrição..."}</p>
                                <p><span className="font-bold">{item.vote_average} </span> Avaliação</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        );
}