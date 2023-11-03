import { FaLink, FaMapPin, FaExternalLinkAlt, Fa500Px, FaMoneyBillAlt } from "react-icons/fa"

import { Events } from "@/mock/events"
import Link from "next/link";
export const EventBody = () => {
    const filteredEvent = (namee) => Events.filter((event,i) => event.name === namee);
    const f = filteredEvent('Google')

    return (
    <div className="w-[100%]  mt-3 py-6 px-6 h-auto">
      { Events && Events.map((event, index) => 
      (
      <>
        <div 
        key={index}
        style={{ "backdrop-filter": "blur(12px)" }}
        className="lg:w-[83%] w-[100%] ml-auto mr-auto  py-3 px-3 flex mt-8 bg-opacity-70 z-10 rounded-3xl h-[230px] lg:h-[240px] bg-black">
        <div className="w-[84%]  lg:w-[90%]">
        <div className="w-[89%] lg:py-3 lg:px-1 mt-5 shadow-inner mb-4 text-center text-sm lg:text-xl lg:h-10 h-4 flex rounded-full">
            <p className="lg:ml-20 ml-3 mr-auto">{event.name}</p>
            <Link   
                    className="cursor-pointer"
                    href={`/${event.src}`}
                    passHref={true}
                     rel="noopener noreferrer" 
                     target="_blank"
                  >
                    <FaExternalLinkAlt className="mt-1 mb-1 ml-auto cursor-pointer mr-auto" />
            </Link>
          </div>
          <div id="date" className="w-[90%] mb-4 lg:py-1 lg:px-1 lg:mt-3 mt-6 text-center lg:text-lg text-sm lg:h-10 h-5 flex">
            <div className="ml-auto mr-auto">
              {`${event.startDate} at ${event.startTime} - ${event.stopDate} at ${event.stopTime}`}
            </div>
          </div>
          <div className="lg:w-[85%] w-[95%] py-1 px-1 lg:mt-3 mb-9 lg:mb-1  text-center text-sm mt-6 lg:text-md text-slate-300 h-5  lg:h-10 flex">
            <div className="ml-auto mr-auto">
              {event.Descr}
            </div>
          </div>
          <div className="w-[85%] lg:mt-1 mt-12  ml-3 mr-3 text-center text-sm lg:text-lg lg:h-10 h-3 flex">
            <FaMapPin className="mr-4 ml-4 mt-1 mb-1"/>
            <p className="mr-4 ml-4 ">
              {event.location}
            </p>
          </div>
        </div>
        <div className="lg:w-[19%] w-[16%] mt-6  h-[100%]">
          <div className="w-[100%] lg:h-[70%] h-[50%] ml-auto mr-auto ">
            <img className="lg:w-[78%] lg:h-[90%] w-[99%] h-14 rounded-full" alt="profileImg" src={'./carb1.svg'} />
          </div>
          <div className="w-[90%] h-[50%] lg:h-[30%]ml-auto mr-auto lg:text-xl lg:mt-1 flex text-sm text-center mt-5">
            <FaMoneyBillAlt className="mt-1 mb-1" />
            <p className="ml-1">{event.Fee}</p>
          </div>
        </div>
       </div>
      </>
      ))}
    </div>
    )
}