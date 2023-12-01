import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";
import { MENU_ITEM_TYPE_KEY } from '../constant';


const useRestaurant=(resId)=>{

    const [restaurant, setRestaurant] = useState({}); 
    const [menuItems, setMenuItems] = useState([]);


    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data=await fetch(FETCH_MENU_URL+resId)
        const json= await data.json()
        console.log(json)
      
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenuItems(json?.data?.cards.find(x=> x.groupedCard)?.
        groupedCard?.cardGroupMap?.REGULAR?.
        cards?.map(x => x.card?.card)?.
        filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
        map(x=> x.itemCards).flat().map(x=> x.card?.info) || [])
   
        
    }

    console.log(restaurant,menuItems)
   const result=[restaurant,menuItems];

    return result;

}

export default useRestaurant;