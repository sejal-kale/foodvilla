import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constant';
import { MENU_ITEM_TYPE_KEY } from '../constant';
import { object } from 'prop-types';
import useRestaurant from '../utils/useRestaurant.js'
import { MENU_ITEM_IMF_URL } from '../constant';
import { addItem } from '../utils/cartSlice.js';
import { useDispatch } from 'react-redux';

const RestarauntMenu = () => {

  const params = useParams();
  const { id } = useParams();



  const [restaurant, menuItems] = useRestaurant(id);
  console.log(menuItems)

  const dispatch=useDispatch()

  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }

  return (
    <div>
      <div className='flex bg-black my-4 p-4 justify-center'>

        <img className='h-44 w-60 my-2 mx-12' src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <div className='m-8 text-white'>
          <h1 className='font-bold text-4xl font-serif  '>{restaurant?.name}</h1>
          <h3 className='font-light text-sm '>{restaurant?.cuisines}</h3>
          {/* <h3>{restaurant?.city}</h3> */}
          <h3>{"⭐" + restaurant?.avgRating} </h3>
          <h3>{` ⏳ ${restaurant?.sla?.deliveryTime} Min  |  ${restaurant?.costForTwoMessage}   `}</h3>
        </div>
      </div>


      <div className='relative left-64 border-t-3 border-black '>
       
      <h1 className='font-bold text-2xl m-4' >Recommended</h1>
          <h1 className='text-gray-400 text-2xl m-3' >{menuItems.length} ITEMS</h1>
        
          

        <ul  className='m-3'>{

          menuItems.map((item) =>
            <>

              <div className='flex'>
                <div className='w-1/2'>
                  <li className='font-bold text-2xl ' >{item.name}</li>
                  <h2  >{"₹" + item.price / 100}</h2>
                  <p className='text-gray-400 font-sans  '>{item.description}</p>
                </div>
                <div className='m-7'>
                  <img className='' src={MENU_ITEM_IMF_URL + item.imageId}></img>
                  <button className='bg-green-700  p-3 border-2 rounded-md text-white hover:bg-green-600'
                  onClick={()=> handleAddItem(item)} >ADD +</button>
                </div>

             
              </div>

            </>

          )
        }
        </ul>
       
      </div>

    </div>
  )
}

export default RestarauntMenu;
