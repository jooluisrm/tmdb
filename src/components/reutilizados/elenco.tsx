import { MediaCastCrew } from "@/types/movieType";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";


type Props = {
    listElenco: MediaCastCrew;
}

export const Elenco = ({ listElenco }: Props) => {
    return (
        <section >
            <div className="text-xl font-bold py-5">Elenco:</div>
            <div className="grid grid-cols-8 gap-3 2xl:grid-cols-10">
                {listElenco.cast?.map((itemCast) => (
                    <div>
                        <Dialog >
                            <DialogTrigger><img src={`https://image.tmdb.org/t/p/w500/${itemCast.profile_path}`} alt={`${itemCast.original_name}`} className="w-40" /></DialogTrigger>
                            <DialogContent className="p-0 m-0 border-0 h-64 ">
                                <DialogHeader>
                                    <DialogDescription className="grid grid-cols-2 h-full">
                                        <div className="flex flex-col justify-center pl-5">
                                            <h1 className="font-extrabold text-2xl pb-5">{itemCast.name}</h1>
                                            <ul className="flex flex-col gap-2">
                                                <li>Função: <span className="font-bold">{itemCast.known_for_department}</span></li>
                                                <li>Personagem: <span className="font-bold">{itemCast.character}</span></li>
                                                <li>Popularidade: <span className="font-bold">{itemCast.popularity.toFixed(2)}</span></li>
                                                <li className="font-bold underline"><Link href={`/person/${itemCast.id}`}>Saiba mais</Link></li>
                                            </ul>
                                        </div>

                                        <div style={{
                                            backgroundImage: `
                                                
                                                url(https://image.tmdb.org/t/p/w500/${itemCast.profile_path})
                                             `,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "0 5px 5px 0"

                                        }}>

                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>

                ))}
            </div>
        </section>
    )
}
//