import { Input } from "../Input"
import { FaSearch} from 'react-icons/fa'


export const Search = () => {
    return(
    <div className="w-[100%]  h-auto lg:h-[400px] mt-20 text-white text-2xl" >
        <div id="bg" className="lg:mt-20 mt-10 mb-18 w-[85%] lg:w-[85%] lg:h-[260px] h-[160px] rounded-xl ml-auto py-1 px-1 mr-auto">
            <p className="font-extrabold mr-auto ml-auto text-center text-black mt-16  mb-10 text-2xl lg:text-8xl">
              Devs Hawk Courses
            </p>
          </div>
          <div
           style={{ "backdrop-filter": "blur(12px)" }}
           className="lg:w-[58%] w-[80%] mt-8 ml-auto mr-auto rounded-3xl h-14 lg:h-[70px] py-2 px-3 bg-opacity-60 z-5 bg-black flex">
            <div className="lg:py-5 lg:px-6 py-2.5 mr-2 px-2 text-center text-2xl ">
               <FaSearch className="text-xl" />
            </div>
            <input type="text"  className="w-[89%] bg-transparent py-3 px-2 outline-none rounded-3xl ml-auto" placeholder="Search..." />
          </div>
    </div>
    )
}