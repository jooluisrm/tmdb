import { BannerInicial } from "@/components/reutilizados/bannerInicial";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "XXXXXX"
}

type Props = {
    params: {
        id: number
    }
}

const MovieSelect = ({ params }: Props) => {
    return (
        <div className="bg-black min-h-screen text-white">
            <BannerInicial />
        </div>
    )
}

export default MovieSelect;