import Image from "next/image";
import React from "react";

function Empty() {
  return (
    <div className="border-panelbackground border-1 width-full bg-panelbackground flex flex-col h-[100vh] border-b-4 border-b-greenishblue items-center justify-center">
      <Image src="/chattermate_gif.gif" alt="chattermate" height={300}  width={300}/>
    </div>
  );
}

export default Empty;
