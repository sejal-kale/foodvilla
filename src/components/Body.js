import { useState, useEffect } from "react";
import { restrauntList } from "../constant";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { FETCH_RESTAURANTS_URL } from "../constant";
import { MENU_ITEM_TYPE_KEY } from '../constant';




const Body = () => {




    const [allRestraunts, setAllRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    useEffect(() => {
        getRestraunts();
    }, [])

    async function getRestraunts() {
        const data = await fetch(FETCH_RESTAURANTS_URL)
        const json = await data.json()
        // console.log(json)
        setAllRestraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }


    const [searchInput, setSearchInput] = useState("");

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offline, Please Check Your Internet..!</h1>
    }

    if (!allRestraunts) return null;

    // if (filteredRestraunts.length===0){
    //     return <h1>No Restaraunt Match With Your Filer.</h1>
    // }
    // console.log(allRestraunts)

    return (allRestraunts.length === 0) ? <Shimmer /> : (
        <>
            <div className=" flex justify-center m-2 ">
                <input
                    className="px-9 border-2 border-orange-400  w-2/5 rounded-sm"
                    type="text"
                    placeholder="Search Here....."
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                ></input>
                <button className="p-4 text-white bg-orange-400 rounded-sm hover:bg-green-800" onClick={() => {
                    // need of filter data
                    // update the state -restraunt varialbe
                    const data = filterData(searchInput, allRestraunts);
                    setFilteredRestraunts(data);

                }}
                >Search</button>


            </div>


            <div className="flex flex-wrap justify-center">
                {
                    filteredRestraunts.map((filteredRestraunt) => {
                        console.log(filteredRestraunt)
                        return <Link to={"/restaurant/" + filteredRestraunt.info.id} key={filteredRestraunt.info.id}><RestrauntCard {...filteredRestraunt.info} /></Link>

                    })
                }


            </div>
        </>
    )
};

export default Body;