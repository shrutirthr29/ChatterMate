import React from "react";
import Image from "next/image";
function onboarding() {
  return(
    <div className="flex justify-center items-center bg-panelbackground h-screen w-screen flex-col text-white">
      <div className="flex items-center justify-center gap-2">
      <Image src="/circle-loader.gif" alt="chattermate" height={300} width={300} />
      <span className="text-7xl text-greenishblue" >ChatterMate</span>
      </div>
      <h2 className="text-2xl text-greenishblue">Create your profile</h2>
      <div className="flex gap-6 mt-5">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          
        </div>
      </div>
    </div>
  ) 
}

export default onboarding;
