import { EpisodesSeason, Star } from "@/types/seasonType";
import imgNoCam from "../../../public/img/sem-foto.jpg";
import Link from "next/link";

type Props = {
    star: Star
}

export const ConvidadoEpItem = ({ star }: Props) => {
    return (
        <>
            <div className="flex justify-between bg-black rounded-lg">
                <div className="py-3 px-5">
                    <h1 className="font-bold text-lg pb-2">{star.name}</h1>
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
                        <li className="font-bold underline text-sm">
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
    );
}