'use client'
import { Button } from "../Buttons"
import { Link } from 'next/link'
 
export const NavList = () => {
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

    
    
    return(
    <div className="w-[100%] bg-gray-100 py-6 px-4 h-[700px] text-center lg:hidden">
        <div className="w-[80%] h-[80%] py-6 px-4  ml-auto mr-auto mb-10">
            <div className="mb-28">
            { Pages.map((feauture, i) => (
            <div key={i} className=" h-10 text-xl cursor-pointer hover:font-light  font-bold py-1 mt-2 mb-2 ">{feauture.name}</div>
            ))}
            </div>
            <Link href={'/auth'}>
              <Button onClick={navigate('/auth')} text={'Sign In'}/>
            </Link>
        </div>
    </div>
    )
}