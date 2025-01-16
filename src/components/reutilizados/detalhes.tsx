import { MediaCastCrew, MovieDetails } from "@/types/movieType";
import { TvShowResponse } from "@/types/tvType";
import { Elenco } from "./elenco";
import { Equipe } from "./equipe";

type Props = {
    type: "movie" | "tv";
    responseDetailsMovie: MovieDetails | null;
    responseDetailsTv: TvShowResponse | null;
    listElenco: MediaCastCrew | null;
}

export const Detalhes = ({type, responseDetailsMovie, responseDetailsTv, listElenco}:Props) => {
    return (
        <>
            <div>
                <h1 className="text-lg font-bold py-1">Título Original:</h1>
                <p>{type === "movie" ? responseDetailsMovie?.original_title : responseDetailsTv?.original_name}</p>
            </div>
            <div>
                <h1 className="text-lg font-bold py-1">Estado Atual:</h1>
                <p>{type === "movie" ? responseDetailsMovie?.status : responseDetailsTv?.status}</p>
            </div>
            <div>
                <h1 className="text-lg font-bold py-1">{type === "movie" ? "Produtora" : "Emissora"}:</h1>
                <div className="flex gap-1">
                    {
                        type === "movie" ?
                            responseDetailsMovie?.production_companies.map((itemCompanie) => (
                                <div className="flex justify-center items-center rounded-lg bg-white w-20">
                                    <img key={itemCompanie.id} src={`https://image.tmdb.org/t/p/original${itemCompanie.logo_path}`} alt={itemCompanie.name} className="p-2" />
                                </div>

                            ))
                            :
                            responseDetailsTv?.networks.map((itemNetwork) => (
                                <div className="flex justify-center items-center rounded-lg bg-white w-20">
                                    <img key={itemNetwork.id} src={`https://image.tmdb.org/t/p/original${itemNetwork.logo_path}`} alt={itemNetwork.name} className="p-2" />
                                </div>

                            ))
                    }
                </div>
            </div>
            <div>
                <h1 className="text-lg font-bold py-1">Idioma Original:</h1>
                <p>{type === "movie" ? responseDetailsMovie?.original_language : responseDetailsTv?.original_language}</p>
            </div>
            {listElenco && listElenco.cast && listElenco.crew ? (
                listElenco.cast.length === 0 && listElenco.crew.length === 0 ? (
                    <p className="font-bold pt-5">Sem informação do elenco!</p>
                ) : (
                    <>
                        {listElenco.cast.length > 0 && <Elenco listElenco={listElenco} />}
                        {listElenco.crew.length > 0 && <Equipe listElenco={listElenco} />}
                    </>
                )
            ) : (
                <p className="font-bold pt-5">Sem informação dos produtores!</p>
            )}
        </>
    );
}