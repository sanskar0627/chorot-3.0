"use client"
import { SessionProvider, signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  return (
   <SessionProvider>
    <OtherHome/>
   </SessionProvider>
  );
}

function OtherHome(){
  const Session =useSession();
  return <div>
    {Session.status=='authenticated'&& <button onClick={()=>signOut()}>SIgn out</button>}
    {Session.status=='unauthenticated'&& <button onClick={()=>signIn()}>SIgn in</button>}
  </div>
}
