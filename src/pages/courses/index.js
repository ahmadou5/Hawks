import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Search } from "@/components/Search"
export default function Courses () {
    return(
    <div className="flex min-h-screen flex-col items-center">
        <Navbar />
        <Search />
    </div>
    )
}