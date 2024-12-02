import { Movie, Person } from "@/types/movieType";

type Props = {
    data: Movie[] | any;
}

export const Item = ({ data }: Props) => {
    return (
        <div className="flex gap-5">
            {data.map((item: Movie | any) => (
                <div className={`rounded-sm transition-all border-2 border-transparent hover:border-white`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path ? item.poster_path : item.profile_path}`} alt={item.original_title}  className="h-full min-w-52 object-cover"/>
                </div>
            ))}
        </div>
    );
}