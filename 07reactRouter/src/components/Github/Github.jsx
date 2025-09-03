import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //         fetch("https://api.github.com/users/golukumar06")
    //         .then(res=> res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // },[])


    return(
        <div className="bg-gray-600 text-white text-center p-4 font-bold">Github Followers : {data.followers}
            <div className="mt-4">
                <img src={data.avatar_url} alt="Profile" width={300} className="mx-auto rounded-lg" />
            </div>
        </div>
        
    )
}

/*  another method to fetch api and extract data by async await */

export const githubInfo = async () =>{
    const response = await fetch("https://api.github.com/users/nitin0625")
    return response.json()
}

export default Github;