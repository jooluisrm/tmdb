import { BannerInicial } from "@/components/reutilizados/bannerInicial";
import { TableFooter } from "@/components/reutilizados/tableFooter";
import { detailsFilmes } from "@/services/axiosConfig";
import { Metadata } from "next";

type Props = {
    params: {
        id: number
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Carrega os detalhes do filme com base no ID
    const movie = await detailsFilmes(params.id);

    return {
        title: movie?.title || "Detalhes do Filme",
    };
}

const MovieSelect = ({ params }: Props) => {

    return (
        <div className="bg-black min-h-screen text-white">
            <BannerInicial idItem={params.id} />
            <TableFooter id={params.id}/>
        </div>
    );
}

export default MovieSelect;