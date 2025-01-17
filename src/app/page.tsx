import { Main } from "@/components/home/main";
import { Welcome } from "@/components/reutilizados/welcome";

const Page = () => {
    return (
        <div className="min-h-screen">
            <Welcome type="inicio"/>
            <Main />
        </div>
    )
}

export default Page;