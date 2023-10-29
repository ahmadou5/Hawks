"use client";
import Image from "next/image";
import { Button } from "../Buttons";

export const BCard = ({ source, alt }) => {
  return (
    <div className="lg:w-[88%] w-[98%] h-auto ml-auto mr-auto bg-transparent backdrop-blur-3xl drop-shadow-3xl py-0 px-0 rounded-lg lg:h-[600px]">
      <img
        className="lg:w-[100%] w-full h-full rounded-lg lg:h-[100%]"
        src="./carb3.svg"
        alt={alt}
      />
    </div>
  );
};

export const SCard = ({ source, alt, text }) => {
  return (
    <div className="lg:w-[290px] w-[250px] mt-5 mb-5 flex items-center flex-col drop-shadow-2xl shadow-2xl ml-auto mr-auto bg-black text-white backdrop-blur-3xl drop-shadow-3xl py-0 px-0 rounded-lg h-[400px] lg:h-[430px]">
      <img
        className="lg:w-[70%] w-42 lg:mt-20 mt-6 mb-3 mr-auto ml-auto rounded-2xl h-42 lg:h-[45%]"
        src={source}
        alt={alt}
      />
      <p className="w-[80%] mt-10 mb-3 text-xl lg:text-xl font-semibold">{text}</p>
    </div>
  );
};


export const LCard = ({ source, alt, text }) => {
  return (
    <div className="w-[290px] mt-4 mb-4 flex items-center flex-col drop-shadow-3xl text-black shadow-2xl ml-auto mr-auto bg-white backdrop-blur-3xl drop-shadow-3xl py-0 px-0 rounded-lg h-[470px]">
      <img
        className="w-[100%] mt-0 mb-3 mr-auto ml-auto drop-shadow-2xl shadow-2xl rounded-b-3xl h-[62%]"
        src={source}
        alt={alt}
      />
      <p className="w-[80%] mt-16 mb-6 text-sm  lg:text-xl font-semibold">{text}</p>
        <Button text={'Learn'} />
    </div>
  );
};

export const MCard = ({ text, name }) => {
  return (
    <div className="lg:w-[100%] mt-16 lg:mt-[120px] flex text-center flex-row w-[90%] h-[380px] lg:h-[400px] ml-auto mr-auto ">
      
      <div className="font-extrabold w-[80%] shadow-2xl ml-auto mr-auto bg-black drop-shadow-2xl text-white rounded-2xl text-4xl ">
        <div className=" lg:mt-5 mt-5 py-2 px-2 space-between ml-auto mr-auto  h-[78%] item w-[90%]">
          <p className="lg:mt-[50px] bg-white rounded-full ml-auto mr-auto font-bold w-[200px] text-black text-xl lg:text-md mb-18 mt-6">
            {name}
          </p>
          <p className="lg:mt-[110px] mt-20 ml-auto mr-auto font-extralight text-sm lg:text-xl mb-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
