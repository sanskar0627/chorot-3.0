import { Button } from "./Buttons";
import { useRef, useState } from "react";


export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [disabled, setDisaled] = useState(true);

  return <div className="flex justify-center">

    <SubotpBox reference={ref1} oneDone={() => {
      ref2.current.focus();
    }} />

    <SubotpBox reference={ref2} oneDone={() => {
      ref3.current.focus();
    }} />

    <SubotpBox reference={ref3} oneDone={() => {
      ref4.current.focus();
    }} />

    <SubotpBox reference={ref4} oneDone={() => {
      ref5.current.focus();
    }} />

    <SubotpBox reference={ref5} oneDone={() => {
      ref6.current.focus();
    }} />

    <SubotpBox reference={ref6} oneDone={() => {
      setDisaled(false)
    }} />

    <br></br>
    <Button disabled={disabled}>Sign Up</Button>
  </div>
}

function SubotpBox({
  reference,oneDone
}) {
  return <div>
    <input ref={reference} onChange={(e)=>{
      oneDone()
    }}type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-400 outline-none px-4 text-white"></input>
  </div>
}