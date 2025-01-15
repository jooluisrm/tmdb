import { ArrowBigDownDashIcon, ArrowBigDownIcon, ArrowBigUp, PlayIcon } from "lucide-react"

type Props = {
    text: string;
    temp: boolean;
}

export const ButtonBannerInicial = ({ text, temp }: Props) => {
    return (
        <div className="font-extrabold flex gap-2 bg-white text-black py-3 px-10 rounded-md w-full justify-center min-w-80 max-w-80 hover:bg-opacity-70 transition-all duration-500">
            {!temp ? <PlayIcon /> : <ArrowBigUp />}
            {text}
        </div>

    );
}