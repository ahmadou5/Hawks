export const Button = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer bg-black rounded-lg w-32 h-8">
        <p className="text-sm  text-white mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
      </div>
    </div>
  );
};
