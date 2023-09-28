"use client";
import { Button } from "../Buttons";
export const Navbar = () => {

  const handleClick = () => {
    console.log('hacker in disguise')
  }
  return (
    <>
      {/**for mobile view **/}
      <div style={{ "backdrop-filter": "blur(12px)" }} className=" bg-clip-padding bg-opacity-5 z-10 fixed text-black sm:flex w-[100%] h-20 lg:hidden md:hidden">
        <div className="w-[98%] flex flex-row mt-1 py-2 px-2 ml-auto mr-auto h-[90%]">
            <div className="ml-0 mr-auto mt-auto mb-auto">
                <div className="text-lg">Devs Hawk</div>
            </div>
            <div className="mr-2 ml-auto mt-auto mb-auto">
                <div className="flex flex-row">
                    <p className="ml-2 mr-2">...more</p>
                </div>
            </div>
        </div>
      </div>
      {/**for desktop view **/}
      <div style={{ "backdrop-filter": "blur(12px)" }} className=" bg-clip-padding bg-opacity-5 fixed z-10 text-black lg:flex md:flex hidden w-[100%] h-20">
        <div className="py-5 px-5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
            <div className="ml-0 mr-auto">
                <div className="text-xl">Devs Hawk</div>
            </div>
            <div className="mr-4 ml-auto">
                <div className="flex flex-row">
                    <p className="ml-2 mr-2 font-bold text-lg">Features</p>
                    <p className="ml-2 mr-2 font-bold text-lg">About</p>
                    <p className="ml-2 mr-2 font-bold text-lg">Jobs</p>
                    <p className="ml-2 mr-2 font-bold text-lg">Events</p>
                    <p className="ml-2 mr-2 font-bold text-lg">Contact</p>
                </div>
            </div>
            <div className="mr-3 ml-20 mb-auto mt-auto">
                <Button text={'Sign in'} click={handleClick}/>
            </div>
        </div>
      </div>
    </>
  );
};
