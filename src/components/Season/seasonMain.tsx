"use client"

import { seasonDetails } from "@/services/axiosConfig";
import { DetailsSeason } from "@/types/seasonType";
import { useEffect, useState } from "react";
import { ItemEpisodio } from "../reutilizados/itemEpisodio";

type Props = {
    params: {
        idTv: number;
        numTemp: number;
    }
}

export const SeasonMain = ({ params }: Props) => {

    const [responseDetailsSeason, setResponseDetailsSeason] = useState<DetailsSeason | null>(null);

    useEffect(() => {

        const carregarDetailsSeason = async () => {
            const details = await seasonDetails(params.idTv, params.numTemp);
            if (details) {
                setResponseDetailsSeason(details);
            }
        }

        carregarDetailsSeason();

    }, []);


    return (
        <main className="bg-gradient-to-b from-black via-transparent to-transparent dark:bg-transparent bg-gray-900">
            <section className="container mx-auto ">
                <h1 className="text-xl font-bold pb-5">Episódios:</h1>
                <div className="flex flex-col gap-3">
                    {
                        responseDetailsSeason?.episodes.map((item) => (
                            <ItemEpisodio key={item.id} item={item}/>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}