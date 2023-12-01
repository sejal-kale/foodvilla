import { IMG_CDN_URL } from "../constant";

const RestrauntCard=({name,cuisines,avgRating,cloudinaryImageId,locality})=>{
   
    return (
    <div className="w-60  p-4   hover:p-3 m-2 shadow rounded-md ">
    <img  className="rounded-md h-52 m-auto w-56" src={IMG_CDN_URL+cloudinaryImageId}></img>
    <h2 className="font-bold text-xl">{name}</h2>
    <h3 className="font-light text-sm">{cuisines.join(',')}</h3>
    <h3 className="font-light text-sm">{locality}</h3>
    <h4>{"⭐"+avgRating} </h4>
   
    </div>

)
};

export default RestrauntCard;