import { funcaoData } from "@/services/funcaoData";
import { MediaItem } from "@/types/movieType";

type Props = {
    data: MediaItem[];
}

export const Item2 = ({ data }: Props) => {
    return (
        <div className="grid grid-cols-4 gap-4 2xl:grid-cols-5">
            {data.map((item: MediaItem) => (
                <div>
                    {
                        item.media_type === "movie" &&
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.original_title} />
                            <div>
                                <h2 className="font-bold pt-2">{item.title}</h2>
                            </div>
                        </div>
                    }
                    {
                        item.media_type === "tv" &&
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.original_name} />
                            <div>
                                <h2 className="font-bold pt-2">{item.name}</h2>
                                <p>{funcaoData(item.first_air_date)}</p>
                            </div>
                        </div>
                    }
                    {
                        item.media_type === "person" &&
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.original_name} />
                            <div>
                                <h2 className="font-bold pt-2">{item.name}</h2>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}