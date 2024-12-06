import { SearchMain } from "@/components/search/searchMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pesquisar"
}

const Search = () => {
    return (
        <div className="pt-20 bg-black min-h-screen text-white">
            <SearchMain />
        </div>
    )
}

export default Search;