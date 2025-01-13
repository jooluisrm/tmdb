import { MediaCastCrew } from "@/types/movieType";

type Props = {
    listElenco: MediaCastCrew;
}

export const Elenco = ({ listElenco }: Props) => {
    return (
        <section >
            <div className="text-xl font-bold py-5">Elenco:</div>
            <div className="grid grid-cols-8 gap-3 2xl:grid-cols-10">
                {listElenco.cast?.map((itemCast) => (
                    <img src={`https://image.tmdb.org/t/p/w500/${itemCast.profile_path}`} alt={`${itemCast.original_name}`} className="w-40" />
                ))}
            </div>
        </section>
    )
}