'use client'

import { useEffect, useState } from "react"
import { Button, LoginButton } from "../Buttons"
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useSession ,signIn} from 'next-auth/react'
import { useRouter } from "next/router"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Provider, Auth, app } from "../../../firebaseConfig";


export const LoginCard = () => {

    const [name, setName] = useState('empty')

    



    const [show, setShow ] = useState(true)
    console.log()
    return(
    <div className="w-[98%] mt-16 mb-8 h-[500px] rounded-xl py-3 text-black px-3 backdrop-blur-xl shadow-xl drop-shadow-xl bg-white" >
        <div className=" text-black drop-shadow-xl rounded-lg h-8 py-1 mt-3 mb-3 font-2xl w-[60%] ml-auto mr-auto">
            <div  className="text-lg mb-5 font-light">
               {`im ${name} by name`}
            </div>
            <div className="text-2xl font-extralight">
            {show ? 'Sign-in' : 'Sign-up'}
            </div>
        </div>
        <div className="mt-5 w-[90%] h-[60%] py-3 px-2 ml-auto mr-auto">
            <Button  />
            {show ? <Login /> : <Register/>}
        </div>
    </div>
    )
}

export const Login = () => {
    const router = useRouter()
    const handleClick = () => {
        try {
            const signInRes = signIn('Google',{
                redirect: false,
                callbackUrl: '/',
                username: '',
                password:  '' ,
            });
            console.log(signInRes);
            if(signInRes) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
        
    }
    return(
    <div className="w-[90%] mt-10 h-[60%] ml-auto mr-auto">
        <div className="mt-[100px]">
            <LoginButton click={handleClick()} text={'Sign-In With Github'} />
            <LoginButton text={'Sign-In With Gmail'} />
        </div>
        <div className="mt-[100px] mb-[50px]">
            <div>
                <p className="mb-2 font-light">Do not Have an account?</p>
                <Button  text={'Sign up'}/>
            </div>
        </div>
    </div>
    )
}

export const Register = () => {
    return(
        <div className="w-[90%] mt-10 h-[60%] ml-auto mr-auto">
        <div className="mt-[120px]">
            <LoginButton text={'Sign-up With Github'} />
            <LoginButton text={'Sign-up With Gmail'} />
        </div>
        <div className="mt-[120px]">
            <div>
                <p className="mb-2 font-light">You Have an account?</p>
                <Button  text={'Sign in'}/>
            </div>
        </div>
    </div>
    )
}