import { MediaItem, MediaItemWithoutType } from "@/types/movieType";

type Props = {
    data: MediaItem[];
    typeSection: "1" | "2";
}

export const Item = ({ data, typeSection }: Props) => {
    return (
        <div className={`${typeSection === "1" ? "flex gap-3" : "grid gap-2 grid-cols-6 2xl:grid-cols-7"}`}>
            {data.map((item: MediaItem) => (
                <>
                    <div key={item.id} className={`rounded-sm transition-all border-2 border-transparent hover:border-white cursor-pointer`}>
                        {item.media_type === "movie" && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt={item.original_title}
                                className={`object-cover h-full ${typeSection === "1" ? "min-w-52" : "w-52"}`}
                            />

                        )}
                        {item.media_type === "tv" && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt={item.original_name}
                                className={`object-cover h-full ${typeSection === "1" ? "min-w-52" : "w-52"}`}
                            />
                        )}
                        {item.media_type === "person" && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                                alt={item.original_name}
                                className={`object-cover h-full ${typeSection === "1" ? "min-w-52" : "w-52"}`}
                            />
                        )}
                        {!item.media_type && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt={item.original_title}
                                className={`object-cover h-full ${typeSection === "1" ? "min-w-52" : "w-52"}`}
                            />
                        )}

                    </div>
                </>

            ))}
        </div>
    );
};
