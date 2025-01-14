import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ButtonBannerInicial } from "./buttonBannerInicial";
import { TvShowResponse } from "@/types/tvType";

type Props = {
    details: TvShowResponse | null;
}

export const Temporadas = ({ details }: Props) => {
    return (
        <>
            <Dialog>
                <DialogTrigger><ButtonBannerInicial temp={true} text="Ver Temporadas" /></DialogTrigger>
                <DialogContent className="overflow-y-scroll h-[600px] min-w-[700px] 2xl:h-[800px]">
                    <DialogHeader>
                        <DialogTitle className="pb-5">Temporadas</DialogTitle>
                        <DialogDescription>
                            <div className="flex flex-col gap-5">
                                {details?.seasons.map((item) => (
                                    <div key={item.id} className="bg-black flex rounded-xl transition-all border border-black duration-200 hover:text-white hover:border-white">
                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.name} className="w-40 h-64 rounded-tl-xl rounded-bl-xl" />
                                        <div className="py-5 px-5 flex flex-col justify-center">
                                            <h1 className="font-extrabold text-xl">{item.name}</h1>
                                            <p className="pb-5"><span className="font-bold">{item.episode_count <= 9 ? "0"+item.episode_count : item.episode_count}</span> Episódios</p>
                                            <div className="flex flex-col gap-1">
                                                <p className="overflow-y-scroll h-28">{item.overview}</p>
                                                <p><span className="font-bold">{item.vote_average} </span> Avaliação</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    );
} 