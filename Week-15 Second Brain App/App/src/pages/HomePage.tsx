import ButtonUi from "../components/ButtonUi/Button";
import SideNavbar from "../components/SideNavbarUi/SideNavbar";
import ShareIcon from "../components/icons/ShareIcon";
import PlusIcon from "../components/icons/PlusIcon";
import { useContext, JSX, useEffect, useRef, useState } from "react";
import Modal from "../components/ModalUi/Modal";
import Card from "../components/CardUi/Card";
import { useNavigate } from "react-router-dom";

const HomePage = ()=>{
  const navigate = useNavigate();
  const [modal,setModal] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data1, setData] = useState<any[]>([]);
  const [ytData, setYTData] = useState<any[]>([]);
  const [notionData, setNitionData] = useState<any[]>([]);
  const [shareData, setShareData] = useState<any[]>([]);
  const [dataShow, setDataShow] = useState("All");
  let show: JSX.Element | JSX.Element[] = data1;

  useEffect(()=>{
    fetchingData();
  },[reloadData])

  async function fetchingData(){
    try{
      setLoading(true);
      const token = localStorage.getItem("token");
      if(!token){
        alert("Please log in first");
        navigate("/"); 
        return;
      }

      const res = await fetch("http://localhost:5000/api/v1/content", {
        method: "GET",
        headers: {
          "token": token
        },
        credentials: "include"
      });

      const jsonData = await res.json();
      setData(jsonData.data);
      }catch(err){
        console.log("Error while sending data");
      }finally {
        setLoading(false);
      }
  }

  if(dataShow === "All"){
    show = loading ? (
      <div className="text-2xl font-semibold">Loading...</div>
    ) : ( data1.length > 0 ? data1.map((item: any, idx: number)=>{
      return <Card key={idx} icon={item.contentType} tag={item.tag} title={item.title} link={item.link} reload={()=> setReloadData(!reloadData)}/>
    }) : <div className="text-2xl font-semibold">You do not have any Content</div>
    )
  }else if(dataShow === "Youtube"){
    show = loading ? (
      <div className="text-2xl font-semibold">Loading...</div>
    ) : ( ytData.length > 0 ? ytData.map((item: any, idx: number)=>{
      return <Card key={idx} icon={item.contentType} tag={item.tag} title={item.title} link={item.link} reload={()=> setReloadData(!reloadData)}/>
    }) : <div className="text-2xl font-semibold">You do not have any Content</div>
    )
  }else if(dataShow === "Twitter"){
    show = loading ? (
      <div className="text-2xl font-semibold">Loading...</div>
    ) : ( ytData.length > 0 ? ytData.map((item: any, idx: number)=>{
      return <Card key={idx} icon={item.contentType} tag={item.tag} title={item.title} link={item.link} reload={()=> setReloadData(!reloadData)}/>
    }) : <div className="text-2xl font-semibold">You do not have any Content</div>
    )
  }
  else{
    show = loading ? (
      <div className="text-2xl font-semibold">Loading...</div>
    ) : ( notionData.length > 0 ? notionData.map((item: any, idx: number)=>{
      return <Card key={idx} icon={item.contentType} tag={item.tag} title={item.title} link={item.link} reload={()=> setReloadData(!reloadData)}/>
    }) : <div className="text-2xl font-semibold">You do not have any Content</div>
    )
  }

  async function share(){
    try{
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if(!token || !userId){
        alert("Please log in first");
        navigate("/"); 
        return;
      }

      const res = await fetch(`http://localhost:5000/api/v1/content`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": token
        },
        credentials: "include",
      });
      const jsonData = await res.json();
      setShareData(jsonData.data);
      //sharing/generating the link
      if (res.ok) {
        // Encode your data as a query parameter
        const encodedData = encodeURIComponent(JSON.stringify(jsonData.data));
        const shareLink = `http://localhost:5173/share/${userId}?data=${encodedData}`;
       
        navigator.clipboard.writeText(shareLink)
        .then(() => {
          alert("Shareable link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err);
          alert("Failed to copy link to clipboard. Here's the link to share manually:\n" + shareLink);
        });
      } else {
        alert("Something went wrong while sharing.");
      }
      }catch(err){
        console.log("Error while sending data");
      }
  }

  return <div className="flex">
   <SideNavbar setData={setData} setYTData={setYTData} setNitionData={setNitionData} data1={data1} setDataShow={setDataShow}/>
   <div className="bg-slate-200 w-full pb-10">
    <div className="flex justify-between">
      <div className="font-bold text-3xl mt-4 ml-8">All Notes</div>
        <div className="flex gap-2 mt-5 mr-8">
          <div onClick={share}>
          <ButtonUi variant="secondary" size="lg" text={"Share Brain"} startIcon={<ShareIcon/>} />
          </div>
          <ButtonUi variant="primary" size="lg" text={"Add Content"} startIcon={<PlusIcon/>} 
          onClick={()=> setModal(!modal)}/>
        </div>
      </div>
      <div className="ml-7 mt-6 flex flex-wrap gap-x-3 gap-y-5">
      {
       show
      }
      </div>
    </div>
    {modal && <Modal onClick={()=> setModal(!modal)} setModal={setModal} setReloadData={()=> setReloadData(!reloadData)}/>}
  </div> 
}

export default HomePage;