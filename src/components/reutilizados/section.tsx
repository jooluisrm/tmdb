import { MediaItem } from "@/types/movieType";
import { Item } from "./item";
import { ArrowSection } from "./arrowSection";
import { useRef, useState } from "react";

type Props = {
    title: string;
    list: MediaItem[];
}

export const Section = ({ title, list }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const carrouselRef = useRef<HTMLDivElement | null>(null);

    // Controla o hover nas setas
    const handleHover = (hover: boolean) => {
        setIsHovered(hover);
    };

    // Move o carrossel para a esquerda ou para a direita
    const handleArrowClick = (direction: "left" | "right") => {
        if (carrouselRef.current) {
            const scrollAmount = 1140; // Ajuste a largura do item conforme necessário
            const maxScroll = carrouselRef.current.scrollWidth - carrouselRef.current.offsetWidth;
            
            if (direction === "left") {
                if (carrouselRef.current.scrollLeft <= 0) {
                    // Se estiver no início, vai para o final
                    carrouselRef.current.scrollLeft = maxScroll;
                } else {
                    carrouselRef.current.scrollLeft -= scrollAmount;
                }
            } else {
                if (carrouselRef.current.scrollLeft >= maxScroll) {
                    // Se estiver no final, vai para o início
                    carrouselRef.current.scrollLeft = 0;
                } else {
                    carrouselRef.current.scrollLeft += scrollAmount;
                }
            }
        }
    };

    return (
        <div className="relative mt-10" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            {/* Título da Seção */}
            <div className="text-xl font-bold mb-3 container mx-auto">
                {title}
            </div>

            {/* Conteúdo dos Itens */}
            <div
                className="relative overflow-hidden smooth-scroll" // Adicionando a classe para transição suave
                ref={carrouselRef}
            >
                <Item data={list} />
            </div>

            {/* Setas de Navegação */}
            <ArrowSection seta="left" hover={isHovered} onClick={() => handleArrowClick("left")} />
            <ArrowSection seta="right" hover={isHovered} onClick={() => handleArrowClick("right")} />
        </div>
    );
};
