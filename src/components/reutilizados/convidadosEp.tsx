import { EpisodesSeason } from "@/types/seasonType";
import { DialogTitle } from "../ui/dialog";
import { Link } from "lucide-react";
import imgNoCam from "../../../public/img/sem-foto.jpg";
import { ConvidadoEpItem } from "./convidadoEpItem";

type Props = {
    item: EpisodesSeason | null;
}

export const ConvidadosEp = ({ item }: Props) => {
    return (
        <>
            <div className="py-3 font-extrabold text-2xl">
                <DialogTitle>Convidados Especiais</DialogTitle>
            </div>
            <div className="flex flex-col gap-2 overflow-y-scroll h-96 2xl:h-96">
                {item?.guest_stars.map((star) => (
                    <ConvidadoEpItem star={star} />
                ))}
            </div>
        </>
    );
}