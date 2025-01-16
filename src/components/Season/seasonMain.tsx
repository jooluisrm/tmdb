"use client"

import { seasonDetails } from "@/services/axiosConfig";
import { DetailsSeason } from "@/types/seasonType";
import { useEffect, useState } from "react";

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
        <main className="container mx-auto">
            <section>
                <h1 className="text-xl font-bold pb-3">Episódios:</h1>
                <div>
                    {
                        responseDetailsSeason?.episodes.map((itemEpisodio) => (
                            <div>
                                {itemEpisodio.name}
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}