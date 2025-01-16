import { BannerInicial } from "@/components/reutilizados/bannerInicial";
import { SeasonMain } from "@/components/Season/seasonMain";

type Props = {
    params: {
        idTv: number;
        numTemp: number;
    }
}

const SeasonSelect = ({ params }: Props) => {

    const { idTv, numTemp } = params;

    return (
        <div className="min-h-screen">
            <BannerInicial idItem={idTv} type="season" numTemp={numTemp}/>
            <SeasonMain params={params}/>
        </div>
    );
}
export default SeasonSelect;