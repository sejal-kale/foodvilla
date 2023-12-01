import React from 'react'
import { MENU_ITEM_IMF_URL } from '../constant';


const cartItem = ({ name, category, description, price, imageId }) => {
    return (

        <div className="w-full m-auto p-4   hover:p-3  shadow rounded-md  flex-col">
            <img className="rounded-md h-10  w-10" src={MENU_ITEM_IMF_URL + imageId}></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h4 className="font-bold">{"₹" + price / 100} </h4>

        </div>


    )
}

export default cartItem

