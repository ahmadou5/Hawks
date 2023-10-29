import { Button } from "../Buttons";
import { BCard } from "../Cards";
import carbon from "./assets";


export const Hero = () => {
  return (
    <div id="bg" className="w-[100%] h-auto lg:h-[1400px] mt-20 text-2xl">
      {/** mobile view */}
      <div className=" drop-shadow-2xl mt-1 hidden  w-[100%] lg :hidden md:hidden">
        mobile
      </div>
      {/** desktop view */}
      <div className="drop-shadow-2xl lg:flex md:flex w-[100%]">
        {/** content view */}
        <div className="w-[100%] mt-20 mb-4 lg:mt-32 lg:mb-8 text-black text-center h-">
          <div className="mt-6 mb-6">
            <p className="font-extralight text-3xl lg:text-7xl">Your Gateway to Opensource</p>
          </div>
          <div className="mt-20 mb-18 w-[85%] lg:w-[70%] ml-auto mr-auto">
            <p className="mt-2 mb-2 font-extrabold text-xl lg:text-3xl">
              Number One Opensource Developers Scouting Community over the
              Galaxy. We aim to Escape the Matrix.
            </p>
          </div>
          <div className="lg:w-[50%]  w-[80%] mt-8 lg:mt-0 mb-10 ml-auto mr-auto">
            <p className="text-lg font-thin">
              ShowCase Yourself as a Developer get higher chances of getting
              hired by the top giant tech companies over the galaxy.
            </p>
          </div>
          <div className="w-[50%] mt-20 mb-5 ml-auto mr-auto">
            <Button text={"Explore"} />
          </div>
          <div className="lg:w-[88%] w-auto mt-40 mb-20 ml-auto mr-auto">
            <BCard source={carbon} />
          </div>
        </div>
        {/** img view */}
        <div></div>
      </div>
    </div>
  );
};
