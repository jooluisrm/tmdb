"use client"

import { creditsSeason, detailsSeries, seasonDetails } from "@/services/axiosConfig";
import { DetailsSeason } from "@/types/seasonType";
import { useEffect, useState } from "react";
import { ItemEpisodio } from "../reutilizados/itemEpisodio";
import { MediaCastCrew } from "@/types/movieType";
import { Elenco } from "../reutilizados/elenco";
import { Equipe } from "../reutilizados/equipe";
import { ComboboxDemo } from "./selectTemp";
import { TvShowResponse } from "@/types/tvType";

type Props = {
    params: {
        idTv: number;
        numTemp: number;
    }
}

export const SeasonMain = ({ params }: Props) => {

    const [responseDetailsSeason, setResponseDetailsSeason] = useState<DetailsSeason | null>(null);
    const [responseCreditsSeason, setResponseCreditsSeason] = useState<MediaCastCrew | null>(null);

    const [responseDetailsTv, setResponseDetailsTv] = useState<TvShowResponse | null>(null);

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
        const carregarDetailsTv = async () => {
            const details: TvShowResponse = await detailsSeries(params.idTv);
            if (details) {
                //console.log(details.genres[0].name);
                setResponseDetailsTv(details);
            }
        }

        carregarDetailsTv();
        carregarCreditsSeason();
        carregarDetailsSeason();

    }, []);


    return (
        <main className="bg-gradient-to-b from-black via-transparent to-transparent">
            <section className="container mx-auto ">
                <div className="flex items-center justify-between pb-5">
                    <h1 className="text-xl font-bold">Episódios:</h1>
                    <ComboboxDemo details={responseDetailsTv} />
                </div>

                <div className="flex flex-col gap-3">
                    {
                        responseDetailsSeason?.episodes.map((item) => (
                            <ItemEpisodio key={item.id} item={item} />
                        ))
                    }
                </div>
                <div>
                    <Elenco listElenco={responseCreditsSeason} />
                    <Equipe listElenco={responseCreditsSeason} />
                </div>
            </section>
        </main>
    );
}