import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import {  useRouter } from "next/router";
import React, { useState } from "react";
import {FcGoogle} from 'react-icons/fc'

function login() {
const [value,setvalue] =useState()
const router =useRouter()
const handleLogin =async()=>{

  const provider =new GoogleAuthProvider()
  const {user:{displayName:name,email,photoURL:profileImage}} =await signInWithPopup(firebaseAuth,provider)
  console.log(email);
  try{
if(email){
  const {data} =await axios.post(CHECK_USER_ROUTE,{email})
  console.log(data);

  if (!data.status) {
    router.push('/onboarding')
  }
}
  }catch(err){
    console.log(err);
  }
}

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="WHATSSAP" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <button onClick={handleLogin}className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg">
        <FcGoogle className="text-4xl"/>
        <span className="text-white text-2xl">Login With Google</span>
      </button>
    </div>
  );
}

export default login;
