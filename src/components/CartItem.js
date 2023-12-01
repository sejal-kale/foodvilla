import React from 'react'

const cartItem = ({ category, description, price, imageId }) => {
    return (

        <div className="w-60  p-4   hover:p-3 m-2 shadow rounded-md ">
            <img className="rounded-md h-10 m-auto w-8" src={MENU_ITEM_IMF_URL + imageId}></img>
            <h2 className="font-bold text-xl">{category}</h2>
            <h3 className="font-light text-sm">{description}</h3>
            <h4 className="font-bold">{"₹" + price / 100} </h4>

        </div>


    )
}

export default cartItem

