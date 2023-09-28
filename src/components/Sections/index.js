"use client";

import { Button } from "../Buttons";
import { BCard, MCard, SCard } from "../Cards";

export const How = () => {
  const SCardData = [
    {
      name: "firts",
      src: "./carb1.svg",
      text: "Contribute to OpenSource Projects.",
    },
    {
      name: "second",
      src: "./carb2.svg",
      text: "Earn Badges, Points and Exposure.",
    },
    {
      name: "third",
      src: "./carb3.svg",
      text: "Secure Your Very First Dream Job.",
    },
  ];
  return (
    <div className="w-[100%] mt-52 mb-10 text-2xl text-black items-center text-center">
      <div>
        <p className="font-extralight text-md">How it Works</p>
      </div>
      <div className="lg:w-[60%] w-[70%] ml-auto mr-auto mt-20">
        <p className="font-extrabold text-4xl">
          Welcome to Devs Hawk The all-in-one Solution Providers for Developers
          and Recruiters.
        </p> 
      </div>
      <div className="lg:w-[50%] w-[70%] ml-auto mr-auto mt-20">
        <p className="font-light text-xl">
          A one-stop MarketPlace to bring Your Dream into Reality.
        </p>
      </div>
      <div className="w-[75%] ml-auto mr-auto mt-20">
        <BCard />
      </div>
      <div className="w-[75%] flex lg:flex-row flex-col ml-auto mr-auto mt-40">
        {SCardData.map((data, index) => (
          <SCard key={index} text={data.text} source={data.src} alt={data.name} />
        ))}
      </div>
      <div className="lg:w-[50%] w-[70%] mt-32 mb-10 ml-auto mr-auto">
        <p className="text-lg font-thin">
            Solving Real World Problems is what always Makes a Better Developer, Contribute and Collaborate to OpenSource Projects to get Experience and more insight in your Development Journey. Meet Great Minds, Have Fun and Make Open Friends. all within OpenSource Communities.
        </p>
      </div>
      <div className="w-[50%] mt-36 mb-20 ml-auto mr-auto">
        <Button text={"Learn more"} />
      </div>
    </div>
  );
};

export const Why = () => {
  const data = [
    {
      name: 'Learning',
      text: 'Other people like open source software because it helps them become better programmers. Because open source code is publicly accessible, students can easily study it as they learn to make better software. Students can also share their work with others, inviting comment and critique, as they develop their skills. When people discover mistakes in programs source code, they can share those mistakes with others to help them avoid making those same mistakes themselves.'
    },
    {
      name: 'Exposure',
      text: 'Other people like open source software because it helps them become better programmers. Because open source code is publicly accessible, students can easily study it as they learn to make better software. Students can also share their work with others, inviting comment and critique, as they develop their skills. When people discover mistakes in programs source code, they can share those mistakes with others to help them avoid making those same mistakes themselves.'
    },
    {
      name: 'Land a Job',
      text: 'Other people like open source software because it helps them become better programmers. Because open source code is publicly accessible, students can easily study it as they learn to make better software. Students can also share their work with others, inviting comment and critique, as they develop their skills. When people discover mistakes in programs source code, they can share those mistakes with others to help them avoid making those same mistakes themselves.'
    },
  ]
  return (
    <div className="w-[100%] mt-[100px] mb-10 text-2xl text-black items-center text-center">
      <div>
        <p className="font-extralight text-md">Why Devs Hawk</p>
      </div>
      <div className="lg:w-[60%] w-[70%] ml-auto mr-auto mt-20">
        <p className="font-extrabold text-4xl">
          Collaborate, Contribute and Develop Your Programming Skills. Access to Global Mentors Market.  
        </p>
      </div>
      {
        data.map((data, i) => (
          <MCard key={i} text={data.text} name={data.name} />
        ))
      }
    </div>
  );
};
