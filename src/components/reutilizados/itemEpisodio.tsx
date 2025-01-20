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

type Props = {
    item: EpisodesSeason | null;
}

export const ItemEpisodio = ({ item }: Props) => {
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
            <DialogContent className="min-w-[1000px] min-h-[500px]">
                <DialogHeader>
                    <DialogTitle>{item?.name}</DialogTitle>
                    <DialogDescription className="flex items-center gap-5">
                        <div className="h-96 flex-1">

                            <img src={`https://image.tmdb.org/t/p/original/${item?.still_path}`} alt={item?.name} className="rounded-lg" />
                            <p className="pt-3 text-white">{item?.overview}</p>
                            <div className="flex gap-3 w-full justify-center items-end h-20">
                                <p>{item?.runtime && item.runtime} min</p>
                                ●
                                <p>{item?.air_date}</p>
                                ●
                                <p>{item?.vote_average.toFixed(2)}</p>
                            </div>

                        </div>
                        <div className="flex-1">
                            <div>
                                <div className="py-3 font-extrabold text-2xl">
                                    <DialogTitle>Convidados Especiais</DialogTitle>
                                </div>
                                <div className="flex flex-col gap-2 overflow-y-scroll h-96 2xl:h-96">
                                    {item?.guest_stars.map((star) => (
                                        <>
                                            <div className="flex justify-between bg-black rounded-lg">
                                                <div className="py-3 px-5">
                                                    <h1 className="font-bold text-xl pb-2">{star.name}</h1>
                                                    <ul className="flex flex-col gap-1">
                                                        <li>
                                                            Função:{" "}
                                                            <span className="font-bold">
                                                                {star.known_for_department}
                                                            </span>
                                                        </li>
                                                        <li>
                                                            Personagem:{" "}
                                                            <span className="font-bold">{star.character}</span>
                                                        </li>
                                                        <li>
                                                            Popularidade:{" "}
                                                            <span className="font-bold">
                                                                {star.popularity.toFixed(2)}
                                                            </span>
                                                        </li>
                                                        <li className="font-bold underline">
                                                            <Link href={`/person/${star.id}`}>Saiba mais</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    style={{
                                                        backgroundImage: `url(${star.profile_path
                                                            ? `https://image.tmdb.org/t/p/w500/${star.profile_path}`
                                                            : imgNoCam.src
                                                            })`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                        backgroundRepeat: "no-repeat",
                                                        width: "100px",
                                                        height: "100%",
                                                        borderRadius: "0 5px 5px 0",
                                                    }}
                                                ></div>
                                            </div>
                                        </>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}