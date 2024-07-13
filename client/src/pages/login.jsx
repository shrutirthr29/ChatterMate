import React from "react";
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
function login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const {user:{displayName:name,email,photoURL:profileImage},
  } = await signInWithPopup(firebaseAuth,provider)
  try{
    if(email){
      
    }
  }catch(err){
    console.log(err)
  }
  }
  return (
    <div className="flex justify-center items-center bg-panelbackground h-screen w-screen flex-col gap-6">
            <div className="flex items-center justify-center gap-2 text-white">
                <Image src="/circle-loader.gif" alt="loader" height={300} width={300} />
                <span className="text-7xl text-greenishblue" >ChatterMate</span>
            </div>
            <button className="flex items-center justify-center gap-7 bg-greenishblue p-5 rounded-lg" onClick={handleLogin}>
                <FcGoogle className="text-4xl" />
                <span className="text-white text-2xl">Login with Google</span>
            </button>
        </div>
  );
}

export default login;
