import { MediaCastCrew } from "@/types/movieType";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import imgNoCam from "../../../public/img/sem-foto.jpg";

type Props = {
    listElenco: MediaCastCrew | null | undefined;
};

export const Elenco = ({ listElenco }: Props) => {

    if(listElenco)
    return (
        <section>
            <div className="text-xl font-bold py-5">Elenco:</div>
            <div className="grid grid-cols-7 gap-3 2xl:grid-cols-9">
                {listElenco.cast?.map((itemCast) => {
                    // Define a URL da imagem ou usa a imagem padrão
                    const imgElenco =
                        itemCast.profile_path === null
                            ? imgNoCam
                            : `https://image.tmdb.org/t/p/w500/${itemCast.profile_path}`;

                    return (
                        <div key={itemCast.id}>
                            <Dialog>
                                <DialogTrigger>
                                    <div className="relative w-40 h-40">
                                        {typeof imgElenco === "string" ? (
                                            <img
                                                src={imgElenco}
                                                alt={itemCast.original_name}
                                                className="w-40 h-40 object-cover rounded-md"
                                            />
                                        ) : (
                                            <Image
                                                src={imgElenco}
                                                alt={itemCast.original_name}
                                                className="object-cover rounded-md"
                                            />
                                        )}
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="p-0 m-0 border-0 h-64">
                                    <DialogHeader>
                                        <DialogDescription className="grid grid-cols-2 h-full">
                                            <div className="flex flex-col justify-center pl-5">
                                                <h1 className="font-extrabold text-2xl pb-5">{itemCast.name}</h1>
                                                <ul className="flex flex-col gap-2">
                                                    <li>
                                                        Função:{" "}
                                                        <span className="font-bold">
                                                            {itemCast.known_for_department}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        Personagem:{" "}
                                                        <span className="font-bold">{itemCast.character}</span>
                                                    </li>
                                                    <li>
                                                        Popularidade:{" "}
                                                        <span className="font-bold">
                                                            {itemCast.popularity.toFixed(2)}
                                                        </span>
                                                    </li>
                                                    <li className="font-bold underline">
                                                        <Link href={`/person/${itemCast.id}`}>Saiba mais</Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div
                                                style={{
                                                    backgroundImage: `url(${
                                                        itemCast.profile_path
                                                            ? `https://image.tmdb.org/t/p/w500/${itemCast.profile_path}`
                                                            : imgNoCam.src
                                                    })`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    backgroundRepeat: "no-repeat",
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "0 5px 5px 0",
                                                }}
                                            ></div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
