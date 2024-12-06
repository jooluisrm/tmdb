import { Search } from "lucide-react";

type Props = {
    inputSearch: string;
    setInputSearch: (value: string) => void
}

export const Input = ({ inputSearch, setInputSearch }: Props) => {
    return (
        <div className="w-full flex items-center relative">
            <Search className="absolute transform translate-x-5" />
            <input
                type="search"
                placeholder="Encontre filmes, séries e muito mais"
                className="w-full py-5 px-16 text-xl bg-gray-900 rounded-md"
                autoFocus
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
            />
        </div>

    );
}