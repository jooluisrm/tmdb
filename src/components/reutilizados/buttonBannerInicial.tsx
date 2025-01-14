import { PlayIcon } from "lucide-react"

type Props = {
    text: string;
    temp: boolean;
}   

export const ButtonBannerInicial = ({ text, temp }: Props) => {
    return (
        <div className="flex gap-2 bg-white text-black py-3 px-10 rounded-md font-bold w-full justify-center min-w-80 max-w-80">{!temp && <PlayIcon />}{text}</div>
    );
}