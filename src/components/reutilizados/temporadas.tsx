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
import { ItemTemporada } from "./itemTemporada";

type Props = {
    details: TvShowResponse | null;
}

export const Temporadas = ({ details }: Props) => {
    return (
        <>
            <Dialog>
                <DialogTrigger><ButtonBannerInicial temp={true} text="Ver Temporadas" /></DialogTrigger>
                <DialogContent className="overflow-y-scroll max-h-[600px] min-w-[700px] 2xl:h-[800px] bg-transparent">
                    <DialogHeader>
                        <DialogTitle className="pb-5">Temporadas</DialogTitle>
                        <DialogDescription>
                            <div className="flex flex-col gap-5">
                                {
                                    details?.seasons.length === 0 ? <p>Sem temporada...</p> :
                                        details?.seasons.map((item) => (
                                            <ItemTemporada item={item} details={details} />
                                        ))
                                }
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    );
} 