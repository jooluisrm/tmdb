import { MediaCastCrew } from "@/types/movieType"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type Props = {
    listElenco: MediaCastCrew | null;
}

export const Equipe = ({ listElenco }: Props) => {

    if(listElenco)
    return (
        <section>
            <div>
                <Dialog>
                    <DialogTrigger className="pt-5 underline">Ver mais</DialogTrigger>
                    <DialogContent className="my-10 h-96 overflow-hidden">
                        <DialogHeader>
                            <DialogTitle className="pb-5">Produtores</DialogTitle>
                            <DialogDescription className="border-t border-b py-3 overflow-y-scroll h-64">
                                <ul className="flex flex-col gap-1 text-center">
                                    <li className="font-bold">Nome | Departamento | Função | Popularidade</li>
                                    {listElenco.crew?.map((itemCrew) => (

                                        <li key={itemCrew.id}>{itemCrew.name} | {itemCrew.known_for_department} | {itemCrew.job} | {itemCrew.popularity.toFixed(2)}</li>

                                    ))}
                                </ul>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </section>
    )
} 