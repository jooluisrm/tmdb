import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlayIcon } from "lucide-react";
import VideoYoutube from "./videoYoutube";
import { MovieDetails, ResultItem } from "@/types/movieType";
import { TvShowResponse } from "@/types/tvType";

type Props = {
    trailer: ResultItem | null;
    detailsFilmes?: MovieDetails | null;
    detailsSeries?: TvShowResponse | null;
}

export const MostrarTrailer = ({ trailer, detailsFilmes, detailsSeries }: Props) => {
    return (
        <>
            <Dialog>
                <DialogTrigger><div className="flex gap-2 bg-white text-black py-3 px-10 rounded-md font-bold w-full justify-center min-w-80 max-w-80"><PlayIcon className="" />Ver vídeo</div></DialogTrigger>
                <DialogContent className="min-w-[800px] h-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{trailer?.type != null && `${trailer.type}:`} <span className="font-extrabold">{detailsFilmes?.title ? detailsFilmes.title : trailer?.name != null ? trailer.name : detailsSeries?.name}</span></DialogTitle>
                        <DialogDescription className="flex justify-center items-center py-2">
                            <VideoYoutube trailer={trailer} />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    );
}