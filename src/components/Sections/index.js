"use client";

import { Button, BButton } from "../Buttons";
import { BCard, MCard, SCard , LCard} from "../Cards";
import { Divider } from "../Divider";
import { Input } from "../Input";

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
    <div className="w-[100%] lg:mt-40 mt-20 mb-10 text-2xl text-black items-center text-center">
      <div>
        <p className="font-extralight text-xl lg:text-2xl">How it Works</p>
      </div>
      <div className="lg:w-[60%] w-[70%] ml-auto mr-auto mt-20">
        <p className="font-extrabold text-2xl lg:text-4xl">
          Welcome to Devs Hawk The all-in-one Solution Providers for Developers
          and Recruiters.
        </p> 
      </div>
      <div className="lg:w-[50%] w-[70%] ml-auto mr-auto mt-20">
        <p className="font-light text-lg">
          A one-stop MarketPlace to bring Your Dream into Reality.
        </p>
      </div>
      <div className="lg:w-[85%] w-auto h-auto ml-auto mr-auto mt-20">
        <BCard />
      </div>
      <div className="lg:w-[75%] w-auto flex lg:flex-row flex-col ml-auto mr-auto lg:mt-40 mt-20">
        {SCardData.map((data, index) => (
          <SCard key={index} text={data.text} source={data.src} alt={data.name} />
        ))}
      </div>
      <div className="lg:w-[50%] w-[80%] lg:mt-32 mt-16 lg:mb-10 mb-4 ml-auto mr-auto">
        <p className="text-lg   font-thin">
            Solving Real World Problems is what always Makes a Better Developer, Contribute and Collaborate to OpenSource Projects to get Experience and more insight in your Development Journey. Meet Great Minds, Have Fun and Make Open Friends. all within OpenSource Communities.
        </p>
      </div>
      <div className="w-[50%] lg:mt-36 mt-16 lg:mb-20 mb-10 ml-auto mr-auto">
        <Button text={"Learn more"} />
      </div>
    </div>
  );
};

export const Why = () => {
  const data = [
    {
      name: 'Learning',
      text: 'Other people like open source software because it helps them become better programmers. Because open source code is publicly accessible, students can easily study it as they learn to make better software.'
    },
    {
      name: 'Exposure',
      text: 'Other people like open source software because it helps them become better programmers. Because open source code is publicly accessible, students can easily study it as they learn to make better software.'
    },
    {
      name: 'Land a Job',
      text: 'Other people like open source software because it helps them become better programmers. Because open source code is publicly accessible, students can easily study it as they learn to make better software.'
    },
  ]
  return (
    <div className="w-[100%] lg:mt-[100px] mt:10 mb-10 text-2xl text-black items-center text-center">
      <div>
        <p className="font-extralight text-xl lg:text-md ">Why Devs Hawk</p>
      </div>
      <div className="lg:w-[80%] w-[85%] ml-auto mr-auto mt-10 lg:mt-20">
        <p className="font-extrabold text-2xl lg:text-4xl">
          Collaborate, Contribute and Develop Your Programming Skills. Access to Global Mentors.  
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
export const Learn = () => {
  const SCardData = [
    {
      name: "firts",
      src: "./carb1.svg",
      text: "Intro to Internet.",
    },
    {
      name: "second",
      src: "./carb2.svg",
      text: "Learn Javascript.",
    },
    {
      name: "third",
      src: "./carb3.svg",
      text: "Learn Python.",
    },
  ]
  return(
    <div id="bg2" className="w-[100%] lg:mb-10 mb-5 mt-8 lg:mt-[100px] items-center text-center text-black h-auto lg:h-[1300px]">
      <div>
        <p className="font-extralight mt-16 lg:mt-[120px] text-xl lg:text-md">Learn with Hawks</p>
      </div>
      <div className="lg:w-[60%] flex w-[70%] ml-auto mr-auto mt-16 lg:mt-20">
        <p className="font-extrabold text-2xl lg:text-4xl">
          Explore Our Learning Resourece, Learn new Skill with Our Project Base Learning Pattern Build While you Learn.  
        </p>
      </div>
      <div className="flex mt-20 lg:flex-row flex-col w-[95%] lg:w-[80%] ml-auto mr-auto">
        {SCardData.map((data, index) => (
          <LCard key={index} text={data.text} source={data.src} alt={data.name} />
        ))}
      </div>
      <div className=" lg:mt-[170px] mt-20 mb-28  w-[80%] ml-auto mr-auto">
        <BButton text={'Explore More Courses'} />
      </div>
    </div>
  )
}

export const Footer = ({}) => {
  const SocialLinks = [
    {
      name: 'X',
      url: '',
    },
    {
      name: 'Tiktok',
      url: '',
    },
    {
      name: 'Instagram',
      url: '',
    },
    {
      name: 'Discord',
      url: '',
    },
    {
      name: 'Github',
      url: '',
    },

  ]

  

  const Features = [
    {
      name: 'Learn',
      url: '',
      status: 'Coming Soon',
    },
    {
      name: 'Jobs',
      url: '',
      status: 'Live',
    },
    {
      name: 'HawkShow',
      url: '',
      status: 'Coming Soon',
    },
    {
      name: 'Free Dev',
      url: '',
      status: 'Coming Soon',
    },
    {
      name: 'Dev Bio',
      url: '',
      status: 'Live',
    },
  ]
  return(
    <div className="w-[100%] mb-0 text-center text-black mt-[70px] py-2 px-2 h-auto lg:h-[400px]" id="bg1">
      <div className="flex ">
      <div className="w-[25%]   ml-auto mr-auto">
          <div className="ml-0 mr-auto">
            <div className="lg:text-2xl text-base font-extrabold">Devs Hawk</div>
          </div>
      </div>
      <div className="w-[35%]  ml-auto mr-auto">
          <div className="ml-0 mr-auto">
            <div className="lg:text-xl text-base font-extrabold mb-3 lg:mb-[30px]">Socials</div>
            { SocialLinks.map((social,i) => (
                <div key={i} className="lg:text-md text-sm lg:mt-6 mt-3 font-light">{social.name}</div>
            ))}
          </div>
      </div>
      <div className="w-[40%] mb-10 ml-auto mr-auto">
          <div className="ml-0 mr-auto">
            <div className="lg:text-xl text-base font-extrabold flex mb-3 lg:mb-[30px]">Products</div>
            { Features.map((feature,i) => (
              <div key={i} className="flex flex-row">
                <div className=" flex lg:text-md text-sm lg:mt-6 mt-3 font-light">
                  <p className="ml-1 lg:ml-1 mr-1 lg:mr-1">{feature.name}</p>
                  <div className={` ${feature.status === 'Coming Soon' && 'lg:w-[105px] w-[60px]'} ${feature.status === 'Coming Soon' && 'bg-slate-400'} ${feature.status === 'Coming Soon' && 'text-black'} w-[49px] h-[14px]  rounded-3xl lg:text-[10px] text-[8px]  text-white bg-green-400 `}>{feature.status}</div>
                </div>
              </div>
            ))}
          </div>
      </div>
      </div>
      <Divider />
      <div>
      <div className="mb-2 lg:mb-3 ml-6 mt-4 flex flex-row font-semibold">
              <p className="w-[45%] ">
                © {new Date().getFullYear()} Dev Hawks
              </p>
              <div className="mb-2 lg:mb-3 ml-5 flex flex-row font-semibold">
            {/**  <div  className="w-[15%] ml-auto mr-16 flex flex-row">
              {Features.map((links, i) => (
                <img key={i}  className="w-6 h-6 ml-1 mr-1" alt="dd" src={`./${links.url}`} />
                
              ))
              }
              </div> **/}
      </div>
      </div>
      </div>
    </div>
  )
}

export const Subscribe = () => {
  return(
    <div className="w-[100%] mb-5 lg:mt-[30px] text-xl lg:text-2xl items-center text-center text-black h-auto lg:h-[400px]" id="">
      <div>
        <p className="font-extralight mt-[60px] text-xl">Subscribe to Hawks</p>
      </div>
      <div className="lg:w-[60%] flex w-[88%] ml-auto mr-auto mt-[40px]">
        <p className="font-extrabold text-2xl  lg:text-4xl">
          Subscribe to our newsletter to get all the updates and news about Hawks.  
        </p>
      </div>
      <div className="lg:w-[60%] flex w-[92%] ml-auto rounded-xl mr-auto mt-16 mb-16 lg:mt-[70px]">
        <input type="text" placeholder="ahmadou@devhawks.com" className="w-[80%] bg-transparent  px-2 mr-1 rounded-lg border-black border " />
        <BButton text={'Subscribe'} />
      </div>
    </div>
  )
}

