import { MediaItem } from "@/types/movieType";
import { Item } from "./item";
import { ArrowSection } from "./arrowSection";
import { getEventListeners } from "events";
import { useState } from "react";

type Props = {
    title: string;
    list: MediaItem[];
}

export const Section = ({ title, list }: Props) => {
    const [isHoverd, setIsHoverd]= useState(false);

    const mouseEnter = (hover: boolean) => {
        if(hover) {
            return setIsHoverd(true);
        }
        return setIsHoverd(false);
    }

    return (
        <div className="relative mt-10" onMouseEnter={() => mouseEnter(true)} onMouseLeave={() => mouseEnter(false)}>
            {/* Título da Seção */}
            <div className="text-xl font-bold mb-3 container mx-auto">
                {title}
            </div>

            {/* Conteúdo dos Itens */}
            <div className="relative">
                <Item data={list} />
            </div>

            {/* Setas de Navegação */}
            <ArrowSection seta="left" hover={isHoverd}/>
            <ArrowSection seta="right" hover={isHoverd}/>
        </div>
    );
}
