import { EpisodesSeason } from "@/types/seasonType";
import imgSemFoto from "../../../public/img/sem-foto.jpg";

type Props = {
    item: EpisodesSeason | null;
}

export const ItemEpisodio = ({ item }: Props) => {
    return (
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
    );
}