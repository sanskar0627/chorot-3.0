import { useEffect , useState } from "react";

export function useFetch(url){
    const [findData, setFinalData]=useState({});
    const[loading,setLoading]=useState(true);
    console.log(url);

    async function getDetails() {
        setLoading(true);
        const response =await fetch(url);
        const json=await response.json();
        setFinalData(json);
        setLoading(false);
    }
    useEffect(()=>{
        getDetails();
    },[url])

    return{
        findData
    }
}