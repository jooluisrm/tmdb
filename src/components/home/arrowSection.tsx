import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type Props = {
    seta: 'left' | 'right';
    hover: boolean;
}

export const ArrowSection = ({ seta, hover }: Props) => {
    return (
        <div
            className={`bg-black bg-opacity-40 h-[315px] w-20 flex items-center justify-center z-20 absolute transition-all duration-500 ease-in-out
        ${hover ? "opacity-100" : "opacity-0"}
        ${seta === 'left' ? "left-0 shadow-[5px_0px_6px_rgba(0,0,0,0.4)]" : "right-0 shadow-[-5px_0px_6px_rgba(0,0,0,0.4)]"}
        top-1/2 transform -translate-y-[139px] hover:bg-opacity-70 hover:scale-105`}>
            {seta === 'left' ? <ArrowBigLeft /> : <ArrowBigRight />}
        </div>

    );
}
