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
        <div className="min-h-screen">
            <BannerInicial idItem={params.id} type="movie"/>
            <TableFooter id={params.id} type="movie"/>
        </div>
    );
}

export default MovieSelect;