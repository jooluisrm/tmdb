import { MainMovie } from "@/components/movie/mainMovie";
import { Welcome } from "@/components/reutilizados/welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filmes"
}

const Filmes = () => {
    return (
        <div className="min-h-screen">
            <Welcome type="filmes"/>
            <MainMovie />
        </div>
    )
}

export default Filmes;