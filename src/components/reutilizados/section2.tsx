import { MediaItem } from "@/types/movieType";
import { Item } from "./item";

type Props = {
    title: string;
    list: MediaItem[];
}

export const Section2 = ({ title, list }: Props) => {
    return (
        <div className="relative mt-10 container mx-auto">
            {/* Título da Seção */}
            <div className="text-xl font-bold mb-3 container mx-auto">
                {title}
            </div>

            {/* Conteúdo dos Itens */}
            <div>
                <Item data={list} typeSection="2"/>
            </div>
        </div>
    );
}