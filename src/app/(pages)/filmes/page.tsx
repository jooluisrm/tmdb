import { Welcome } from "@/components/reutilizados/welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filmes"
}

const Filmes = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Welcome type="filmes"/>
        </div>
    )
}

export default Filmes;