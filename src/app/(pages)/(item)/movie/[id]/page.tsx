import { Metadata } from "next";

export const metadata: Metadata = {
    title: "XXXXXX"
}

type Props = {
    params: {
        id: number
    }
}

const MovieSelect = ({ params }: Props) => {
    return (
        <div className="bg-black min-h-screen text-white">
            
        </div>
    )
}

export default MovieSelect;