import { BannerInicial } from "@/components/reutilizados/bannerInicial";
import { TableFooter } from "@/components/reutilizados/tableFooter";
import { detailsSeries } from "@/services/axiosConfig";
import { Metadata } from "next";

type Props = {
    params: {
        id: number
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Carrega os detalhes do filme com base no ID
    const tv = await detailsSeries(params.id);

    return {
        title: tv?.name || "Detalhes da Serie",
    };
}

const SerieSelect = ({ params }: Props) => {

    return (
        <div className="bg-black min-h-screen text-white">
            <BannerInicial idItem={params.id} type="tv"/>
            <TableFooter id={params.id} type="tv"/>
        </div>
    );
}

export default SerieSelect;