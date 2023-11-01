import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { EventSearch,Search } from "@/components/Search"
export default function Event () {
    return(
    <div className="flex min-h-screen flex-col items-center">
        <Navbar />
        <EventSearch />
    </div>
    )
}