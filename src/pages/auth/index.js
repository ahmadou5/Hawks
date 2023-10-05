'use client'
import { LoginCard } from "@/components/Login"

export default function Login () {
    return(
        <div>
            <div className="w-[100%] bg-gray-100 py-6 px-4 h-[100%] text-center lg:hidden">
                <LoginCard />
            </div>
            <div
            style={{ "backdrop-filter": "blur(12px)" }}
            className=" backdrop-blur-lg bg-clip-padding bg-opacity-60 z-10 fixed text-black text-center  hidden lg:flex h-[100%]  w-[100%] md:hidden">
                <LoginCard />
            </div>
        </div>
    )
}