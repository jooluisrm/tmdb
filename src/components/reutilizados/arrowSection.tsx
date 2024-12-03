import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type Props = {
    seta: "left" | "right";
    hover: boolean;
    onClick: () => void;
}

export const ArrowSection = ({ seta, hover, onClick }: Props) => {
    return (
        <div
            className={`bg-black bg-opacity-40 h-[315px] w-16 flex items-center justify-center z-10 absolute transition-all duration-300 
            ${hover ? "bg-opacity-60" : "opacity-0"} 
            ${seta === "left" ? "left-0 shadow-[4px_0px_6px_rgba(0,0,0,0.5)]" : "right-0 shadow-[-4px_0px_6px_rgba(0,0,0,0.5)]"} 
            top-1/2 transform -translate-y-[139px] hover:bg-opacity-70 cursor-pointer`}
            onClick={onClick}
        >
            {seta === "left" ? <ArrowBigLeft /> : <ArrowBigRight />}
        </div>
    );
};
