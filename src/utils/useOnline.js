import { useEffect, useState } from "react";


const useOnline=()=>{
    const [isOnline,getIsOnline]=useState(true)

    const handleOnline=()=>{
        getIsOnline(true);
    }
    const handleOffline=()=>{
        getIsOnline(false);
    }

    useEffect(()=>{

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

    return ()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
    }

    },[]);



    return isOnline;
}

export default useOnline;