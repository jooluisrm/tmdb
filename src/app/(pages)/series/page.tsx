import { Welcome } from "@/components/reutilizados/welcome";
import { MainSeries } from "@/components/series/mainSeries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Séries"
}

const Series = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Welcome type="series"/>
            <MainSeries />
        </div>
    )
}

export default Series;