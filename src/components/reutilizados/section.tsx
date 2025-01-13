import { MediaItem } from "@/types/movieType";
import { useEffect, useRef, useState } from "react";
import { Item } from "./item";
import { ArrowSection } from "./arrowSection";
import { recommendationsFilmes } from "@/services/axiosConfig";

type Props = {
    title: string;
    list: MediaItem[];
    pageList?: number;
    setPageList?: (n: number) => void;
    type?: "movie" | "tv" | "person";
}

export const Section = ({ title, list, pageList, setPageList, type }: Props) => {

    const [isHoveredLeft, setIsHoveredLeft] = useState(false); // setas unitarias
    const [isHoveredRight, setIsHoveredRight] = useState(false); // teminar

    const carrouselRef = useRef<HTMLDivElement | null>(null);

    // Controla o hover nas setas
    const handleHover = (hover: boolean) => {
        setIsHoveredLeft(hover);
        setIsHoveredRight(hover);
        if (hover) {
            // Checa as condições ao ativar o hover
            hiddenSeta();
        }
    };

    // Move o carrossel para a esquerda ou para a direita
    const handleArrowClick = (direction: "left" | "right") => {
        if (carrouselRef.current) {
            const scrollAmount = 1140; // Ajuste a largura do item conforme necessário
            const maxScroll = carrouselRef.current.scrollWidth - carrouselRef.current.offsetWidth;

            if (direction === "left") {
                if (carrouselRef.current.scrollLeft <= 0) {
                    // Se estiver no início, vai para o final

                    if (pageList && setPageList) {
                        if (pageList > 1) { // mudando a pagina -
                            setPageList(pageList - 1);
                        }
                    }

                    carrouselRef.current.scrollLeft = maxScroll;
                } else {
                    carrouselRef.current.scrollLeft -= scrollAmount;
                }
            } else {
                if (carrouselRef.current.scrollLeft >= maxScroll) {
                    // Se estiver no final, vai para o início
                    if (pageList && setPageList) {

                        // mudando a pagina +
                         
                        setPageList(pageList + 1);
                        
                        
                    }

                    carrouselRef.current.scrollLeft = 0
                } else {
                    carrouselRef.current.scrollLeft += scrollAmount;
                }
            }
        }
    };
    const hiddenSeta = () => {
        if (carrouselRef.current) {
            if (pageList) {
                return carrouselRef.current.scrollLeft <= 0 && pageList === 1 ? setIsHoveredLeft(false) : setIsHoveredLeft(true);
            }
            carrouselRef.current.scrollLeft <= 0 ? setIsHoveredLeft(false) : setIsHoveredLeft(true);
        }
    }

    useEffect(() => {
        if (isHoveredLeft || isHoveredRight) {
            const interval = setInterval(() => {
                hiddenSeta();
            }, 100); // Verifica a cada 100ms para não sobrecarregar o navegador

            return () => clearInterval(interval); // Limpa o intervalo quando o hover termina
        }
    }, [isHoveredLeft, isHoveredRight, pageList]);


    return (
        <div className="relative mt-10 container mx-auto" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            {/* Título da Seção */}
            <div className="text-xl font-bold mb-3 container mx-auto">
                {title}
            </div>

            {/* Conteúdo dos Itens */}
            <div
                className="relative overflow-hidden smooth-scroll mx-auto" // Adicionando a classe para transição suave
                ref={carrouselRef}
            >
                <Item data={list} typeList={type} typeSection="1" />
            </div>

            {/* Setas de Navegação */}
            <ArrowSection seta="left" hover={isHoveredLeft} onClick={() => handleArrowClick("left")} />
            <ArrowSection seta="right" hover={isHoveredRight} onClick={() => handleArrowClick("right")} />
        </div>
    );
};
