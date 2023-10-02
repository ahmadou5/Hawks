import { Button } from "../Buttons"

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
    <div className="w-[100%] bg-white py-6 px-4 h-[700px] text-center lg:hidden">
        <div className="w-[80%] h-[70%] py-6 px-4  ml-auto mr-auto mb-10">
            <div className="mb-9">
            { Pages.map((feauture, i) => (
            <div key={i} className=" h-10 text-xl font-semibold py-1 mt-1 mb-1 ">{feauture.name}</div>
            ))}
            </div>
            <Button text={'Sign In'}/>
        </div>
    </div>
    )
}