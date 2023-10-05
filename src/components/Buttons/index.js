import {RiGoogleFill} from 'react-icons/ri'
export const Button = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-white  bg-black rounded-lg  w-32 h-8">
        <p className="text-sm  mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
      </div>
    </div>
  );
};

export const WButton = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer bg-white rounded-lg w-32 h-8">
        <p className="text-sm  text-black mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
      </div>
    </div>
  );
};

export const BButton = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer bg-black w-auto rounded-lg lg:w-[180px] h-[38px]">
        <p className="text-sm  text-white mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
      </div>
    </div>
  );
};

export const LoginButton = ({text, source, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row mt-4 mb-4 ml-auto mr-auto py-2 px-2 lg:w-[60%] cursor-pointer  text-white  bg-black rounded-full md:w-[50%] w-[70%] h-12">
        <p className="lg:text-xl  text-xl mt-auto mb-auto font-extralight ml-auto mr-auto">{text}</p>
        <RiGoogleFill className=" rounded-full h-7 w-7   font-light ml-auto mr-auto" />
        {/** <img src={`./${source}`} className="text-sm rounded-full h-7 w-7   font-light ml-auto mr-auto"/> **/}
      </div>
    </div>
  );
};