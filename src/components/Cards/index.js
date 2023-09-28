"use client";
export const BCard = ({ source, alt }) => {
  return (
    <div className="lg:w-[88%] sm:w-[98%] lg:h-auto sm:h-10 ml-auto mr-auto bg-transparent backdrop-blur-3xl drop-shadow-3xl py-0 px-0 rounded-lg h-[600px]">
      <img
        className="w-[100%]  rounded-lg h-[100%]"
        src="./carb3.svg"
        alt={alt}
      />
    </div>
  );
};

export const SCard = ({ source, alt, text }) => {
  return (
    <div className="w-[290px] mt-4 mb-4 flex items-center flex-col drop-shadow-2xl shadow-2xl ml-auto mr-auto bg-white backdrop-blur-3xl drop-shadow-3xl py-0 px-0 rounded-lg h-[430px]">
      <img
        className="w-[40%] mt-20 mb-3 mr-auto ml-auto rounded-4xl h-[20%]"
        src={source}
        alt={alt}
      />
      <p className="w-[80%] mt-20 mb-3 text-3xl font-semibold">{text}</p>
    </div>
  );
};

export const MCard = ({ text, name }) => {
  return (
    <div className="lg:w-[100%]  mt-[120px] flex text-center flex-row w-[70%] h-[400px] ml-auto mr-auto ">
      <div className="font-extrabold w-[50%] text-white text-4xl ">
        <div className="w-[65%] h-[78%] bg-white mt-12 drop-shadow-xl shadow-2xl rounded-2xl ml-auto mr-auto">
          <img src="" />
        </div>
      </div>
      <div className="font-extrabold w-[50%] shadow-2xl bg-black drop-shadow-2xl text-white rounded-2xl text-4xl ">
        <div className=" mt-5 py-2 px-2 space-between ml-auto mr-auto  h-[78%] item w-[80%]">
          <p className="mt-10  ml-auto mr-auto font-bold text-md mb-8">
            {name}
          </p>
          <p className="mt-2 ml-auto mr-auto font-extralight text-xl mb-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
