import { Button } from "../Buttons"
import { useRouter } from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"



export const NavList = () => {
  const {data:session} = useSession()
  
    const Pages = [
        {
          name: 'Home',
          url: '',
          status: 'Coming Soon',
        },
        {
          name: 'Feutures',
          url: '',
          status: 'Live',
        },
        {
          name: 'About',
          url: '',
          status: 'Coming Soon',
        },
        {
          name: 'Event',
          url: '',
          status: 'Coming Soon',
        },
        {
          name: 'Contact',
          url: '',
          status: 'Live',
        },
      ]
      const Pages2 = [
        {
          name: 'Profile',
          url: '',
          status: 'Live',
        },
        {
          name: 'Dashboard',
          url: '',
          status: 'Live',
        },

        {
          name: 'Courses',
          url: '/courses',
          status: 'Coming Soon',
        },
       
        {
          name: 'About',
          url: '',
          status: 'Live',
        },
      ]

    const router = useRouter()
    
    return(
    <>
    <div className="w-[100%] bg-gray-100 py-6 px-4 h-[700px] text-center lg:hidden">
        <div className="w-[83%] h-[80%] py-6 px-4  ml-auto mr-auto mb-10">
            {!session && 
              <div className="mb-16">
              {session && <>{session.user.email}</>}
              { Pages.map((feauture, i) => (
              <p key={i} className="ml-2 mr-2 cursor-pointer bg-black hover:font-light font-bold text-lg">
              <Link href={feauture.url}>
                {feauture.name}
              </Link>
            </p>
              ))}
              </div>
            }
            { session && 
            <div className="flex w-[96%] shadow-lg rounded-full h-12 mb-11 ml-auto mr-auto">
            <div className="mr-auto ml-2 mb-auto mt-auto cursor-pointer">
              <img className="w-9 h-9 rounded-full" alt="profileImg" src={session?.user.image} />
            </div>
            <div className="mt-auto text-sm font-semibold mb-auto ml-3 mr-auto">
             👋 Hello {session?.user.name}
            </div>
            </div>
            }
            {session && 
              <div className="mb-28">
              
              { Pages2.map((feauture, i) => (
              <div key={i} className=" h-10 text-xl cursor-pointer hover:font-light  font-bold py-1 mt-2 mb-2 ">
                <Link href={feauture.url}>
                  {feauture.name}
                </Link>
                </div>
              ))}
              </div>
            }
            
           {!session && 
             <Button click={() => {
              signIn('Google',
              {
                redirect: false,
                callbackUrl: '/'
              }
              )
            }} text={'Sign In'}/>
           }
           {session && 
             <Button click={() => {
              signOut({
                redirect: false,
                callbackUrl: '/'
              })
            }} text={'Sign Out'}/>
           }
        </div>
    </div>
    </>
    
    )
}



export const SignCard = () => {

  const Pages = [
    {
      name: 'Dashboard',
      url: '/',
      status: 'Coming Soon',
    },
    {
      name: 'Profile',
      url: '/',
      status: 'Live',
    },
   
  ]
  const session = useSession()
  const userData = session?.data.user
  return(
  <>
  <div
      style={{ "backdrop-filter": "blur(12px)" }}
      className="w-[27%] mt-24 bg-gray-100 py-6 bg-opacity-60 z-10 fixed ml-[1100px]  px-4 h-[370px] rounded-2xl  ">
        
        <div className="w-[80%] h-[80%] py-6 px-4  ml-auto mr-auto mb-10">
        { session && <div className=" h-10 text-2xl text-black ml-4  font-bold py-1 mt-2 mb-6 ">{` 👋 Hello ${userData?.name}`}</div>}
            <div className="mb-8 text-center">
            { Pages.map((feauture, i) => (
              <div className=" h-10 text-xl cursor-pointer hover:font-light text-black  font-bold py-1 mt-2 mb-2 ">
                <Link key={i} href={feauture.url}>
                {feauture.name}
                </Link>
              </div>
            ))}
            </div>
            <Button click={() => signOut()} text={'Sign Out'}/>
        </div>
    </div>
  </>
  )
}