import { Main } from "@/components/home/main";
import { Welcome } from "@/components/home/welcome";

const Page = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Welcome type="inicio"/>
            <Main />
        </div>
    )
}

export default Page;