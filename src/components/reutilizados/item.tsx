import { MediaItem } from "@/types/movieType";

type Props = {
    data: MediaItem[];
}

export const Item = ({ data }: Props) => {
    return (
        <div className="flex gap-5">
            {data.map((item: MediaItem) => (
                <div key={item.id} className={`rounded-sm transition-all border-2 border-transparent hover:border-white cursor-pointer`}>
                    {item.media_type === "movie" && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={item.original_title}
                            className="h-full min-w-52 object-cover"
                        />
                    )}
                    {item.media_type === "tv" && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={item.original_name}
                            className="h-full min-w-52 object-cover"
                        />
                    )}
                    {item.media_type === "person" && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                            alt={item.original_name}
                            className="h-full min-w-52 object-cover"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};
