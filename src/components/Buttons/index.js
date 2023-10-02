export const Button = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer hover:bg-white text-white hover:text-black hover:font-semibold bg-black rounded-lg w-36 h-9">
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
