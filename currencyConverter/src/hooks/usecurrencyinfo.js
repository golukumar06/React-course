import { useEffect,useState } from "react";

function useCurencyinfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
        .then((res)=> res.json())
        .then((res)=>setData(res.rates || {}))
    },[currency])

    return data

}

export default useCurencyinfo;
