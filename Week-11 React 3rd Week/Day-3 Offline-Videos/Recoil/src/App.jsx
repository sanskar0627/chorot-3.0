import { useState } from 'react'
import './App.css'
import { networkAtom, jobAtom, notificationAtom, messagingAtom } from './atmos'
import {RecoilRoot, useRecoilValue} from 'recoil'

function App() {
  
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom);
  const jobsAtomCount=useRecoilValue(jobAtom);
  const notificationsAtomCount=useRecoilValue(notificationAtom);
  const messagingAtomCount=useRecoilValue(messagingAtom);

  return (
    <>
      <button>Home</button>

      <button> My Network ({networkNotificationCount >=100? "99+":networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Message {messagingAtomCount}</button>
      <button>NOtification {notificationsAtomCount}</button>
      <button>ME </button>
    </>
  )
}
export default App
