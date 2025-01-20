"use client"

import { creditsSeason, seasonDetails } from "@/services/axiosConfig";
import { DetailsSeason } from "@/types/seasonType";
import { useEffect, useState } from "react";
import { ItemEpisodio } from "../reutilizados/itemEpisodio";
import { MediaCastCrew } from "@/types/movieType";
import { Elenco } from "../reutilizados/elenco";
import { Equipe } from "../reutilizados/equipe";

type Props = {
    params: {
        idTv: number;
        numTemp: number;
    }
}

export const SeasonMain = ({ params }: Props) => {

    const [responseDetailsSeason, setResponseDetailsSeason] = useState<DetailsSeason | null>(null);
    const [responseCreditsSeason, setResponseCreditsSeason] = useState<MediaCastCrew | null>(null);

    useEffect(() => {

        const carregarDetailsSeason = async () => {
            const details = await seasonDetails(params.idTv, params.numTemp);
            if (details) {
                setResponseDetailsSeason(details);
            }
        }
        const carregarCreditsSeason = async () => {
            const details = await creditsSeason(params.idTv, params.numTemp);
            if (details) {
                setResponseCreditsSeason(details);
            }
        }

        carregarCreditsSeason();
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
                <div>
                    <Elenco listElenco={responseCreditsSeason}/>
                    <Equipe listElenco={responseCreditsSeason}/>
                </div>
            </section>
        </main>
    );
}