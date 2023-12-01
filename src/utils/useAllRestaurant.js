import { useState,useEffect } from "react";
import { FETCH_RESTAURANTS_URL } from "../constant";

const useAllRestaurant=()=>{

    const [allRestraunts,setAllRestraunts]=useState([]);
    const [filteredRestraunts,setFilteredRestraunts]=useState([]);
    useEffect(()=>{
        getRestraunts();
    },[])
    
    async function getRestraunts(){
        const data= await fetch(FETCH_RESTAURANTS_URL)
        const json=await data.json()
        // console.log(json)
        setAllRestraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    return [allRestraunts,filteredRestraunts];
}

export default useAllRestaurant;