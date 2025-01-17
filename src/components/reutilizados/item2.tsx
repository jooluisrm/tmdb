import { funcaoData } from "@/services/funcaoData";
import { MediaItem } from "@/types/movieType";
import Link from "next/link";
import imgSemFoto from "../../../public/img/sem-foto.jpg";

type Props = {
    data: MediaItem[];
}

export const Item2 = ({ data }: Props) => {
    return (
        <div className="grid grid-cols-4 gap-4 2xl:grid-cols-5">
            {data.map((item: MediaItem) => (
                <Link href={`${item.media_type === "movie" && `/movie/${item.id}` || item.media_type === "tv" && `/tv/${item.id}` || item.media_type === "person" && `/person/${item.id}`}`}>

                    <div className="transition-all border-2 border-transparent hover:scale-110 hover:border-white hover:rounded-lg">
                        {
                            item.media_type === "movie" &&
                            <div>
                                <img
                                    src={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : imgSemFoto.src}
                                    alt={item.original_title}
                                    className="hover:rounded-t-lg  transition-all h-44 w-full"
                                />
                                <div className="pl-2 pb-2">
                                    <h2 className="font-bold pt-2">{item.title}</h2>
                                    <p>{funcaoData(item.release_date)}</p>
                                </div>
                            </div>
                        }
                        {
                            item.media_type === "tv" &&
                            <div>
                                <img
                                    src={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : imgSemFoto.src}
                                    alt={item.original_name}
                                    className="hover:rounded-t-lg h-44 transition-all"
                                />
                                <div className="pl-2 pb-2">
                                    <h2 className="font-bold pt-2">{item.name}</h2>
                                    <p>{funcaoData(item.first_air_date)}</p>
                                </div>
                            </div>
                        }
                        {
                            item.media_type === "person" &&
                            <div>
                                <img 
                                    src={item.profile_path ? `https://image.tmdb.org/t/p/original/${item.profile_path}` : imgSemFoto.src}
                                    alt={item.original_name}
                                    className="hover:rounded-t-lg h-44 w-full transition-all"
                                />
                                <div className="pl-2 pb-2">
                                    <h2 className="font-bold pt-2">{item.name}</h2>
                                </div>
                            </div>
                        }
                    </div>
                </Link>
            ))}
        </div>
    );
}