"use client";

import { useEffect, useState } from "react";
import { Button, LoginButton } from "../Buttons";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Provider, Auth, app } from "../../../firebaseConfig";
import { useStore } from "../../config/store";

export const LoginCard = () => {
  const [name, setName] = useState("");

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleClick = () => {
    try {
        signInWithPopup(auth, provider).then((data) => {
            localStorage.setItem("email", data.user.email);
            setName(data.user.email);
            alert(name)
          });
    } catch (error) {
        console.log(error)
    }
     
  };
  const toggle = useStore((state) => state.toggle)
  const setToggle = useStore((state) => state.setToggle)

  return (
    <div className="w-[92%] ml-auto mr-auto lg:w-[40%] lg:mt-[120px] lg:ml-auto lg:mr-auto mt-16 mb-8 h-[490px] lg:h-[520px] rounded-2xl py-3 text-black px-3 backdrop-blur-xl shadow-xl drop-shadow-xl bg-white">
      <div className=" text-black drop-shadow-xl rounded-lg h-8 py-1 mt-3 mb-3 font-2xl w-[60%] ml-auto mr-auto">
        <div className="text-2xl lg:3xl lg:font-semibold mt-8 font-extralight">
          {toggle ? "Sign-in" : "Sign-up"}
        </div>
      </div>
      <div className="mt-5 w-[90%] h-[60%] py-3 px-2 ml-auto mr-auto">
        {toggle ? (
          <>
            <div className="w-[90%] mt-10 h-[60%] ml-auto mr-auto">
              <div className="mt-[100px] lg:mt-[120px]">
                <LoginButton click={handleClick} text={"Connect Gmail"} />
              </div>
              <div className="mt-[110px] lg:mt-[120px] mb-[50px]">
                <div>
                  <p onClick={setToggle} className="mb-4 font-light">Don't Have an account?</p>
                  <Button click={setToggle} text={"Sign up"} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-[90%] mt-10 h-[60%] ml-auto mr-auto">
              <div className="mt-[100px] lg:mt-[120px]">
                <LoginButton click={handleClick} text={"Gmail"} />
              </div>
              <div className="mt-[110px] lg:mt-[120px]">
                <div>
                  <p className="mb-2 font-light">You Have an account?</p>
                  <Button click={setToggle} text={"Github"} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

