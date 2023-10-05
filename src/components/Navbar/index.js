"use client";
import { Button } from "../Buttons";
import { RiMenuLine } from "react-icons/ri";
import { NavList } from "../NavList";
import { useState } from "react";
import Link from "next/link";



export const Navbar = () => {
  const [show,setShow] = useState(false)
  const handleClick = () => {
    console.log("hacker in disguise");
    setShow(!show)
  };

  const Pages = [
    
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
      name: 'Jobs',
      url: '',
      status: 'Coming Soon',
    },
    {
      name: 'Contact',
      url: '',
      status: 'Live',
    },
  ]
  return (
    <>
      {/**for mobile view **/}
      <div
        style={{ "backdrop-filter": "blur(12px)" }}
        className=" backdrop-blur-lg bg-clip-padding bg-opacity-60 z-10 fixed text-black sm:flex w-[100%] h-20 lg:hidden md:hidden"
      >
        <div className="w-[98%] flex flex-row mt-1 py-2 px-2 ml-auto mr-auto h-[90%]">
          <div className="ml-0 mr-auto mt-auto mb-auto">
            <Link href={'/'}>
            <div className="text-2xl font-semibold">Devs Hawk</div>
            </Link>
          </div>
          <div className="mr-2 ml-auto mt-auto mb-auto">
            <div className="flex flex-row">
              <p onClick={handleClick} className="ml-2  mr-2">
                <RiMenuLine className="h-8 w-8" />
              </p>
            </div>
          </div>
        </div>
        { show && <NavList />}
      </div>
      {/**for desktop view **/}
      <div
        style={{ "backdrop-filter": "blur(12px)" }}
        className=" bbackdrop-blur-lg bg-clip-padding bg-opacity-60 fixed z-10 text-black lg:flex md:flex hidden w-[100%] h-20"
      >
        <div className="py-5 px-5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
          <div className="ml-0 mr-auto">
            <Link href={'/'}>
              <div className="text-xl">Devs Hawk</div>
            </Link>
          </div>
          <div className="mr-4 ml-auto">
            <div className="flex flex-row">
              {Pages.map((page,i) => (
                  <p key={i} className="ml-2 mr-2 cursor-pointer hover:font-light font-bold text-lg">{page.name}</p>
              ))}
            </div>
          </div>
          <div className="mr-3 ml-20 mb-auto mt-auto">
            <Button text={"Sign in"} click={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};
