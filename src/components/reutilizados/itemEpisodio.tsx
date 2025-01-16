import { EpisodesSeason } from "@/types/seasonType";

type Props = {
    item: EpisodesSeason | null;
}

export const ItemEpisodio = ({ item }: Props) => {
    return (
        <div className="bg-black rounded-xl flex border hover:border-white transition-all duration-300">
            <img
                src={`https://image.tmdb.org/t/p/original/${item?.still_path}`}
                alt={item?.name}
                className="w-96 rounded-tl-xl rounded-bl-xl"
            />
            <div className="flex flex-col justify-center py-3 px-5 gap-1">
                <h1 className="text-xl font-bold">{item?.episode_number} - {item?.name}</h1>
                <p className="py-4">{item?.overview}</p>
                <p><span className="font-bold">{item?.air_date}</span></p>
                <p className="font-bold">{item?.runtime} min</p>
                <p><span className="font-bold">{item?.vote_average.toFixed(2)}</span> Avaliação</p>
            </div>
        </div>
    );
}