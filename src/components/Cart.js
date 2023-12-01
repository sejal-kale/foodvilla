// import { useDispatch, useSelector } from "react-redux";

// import FoodItem from "./FoodItem";
// import { clearCart } from "../utils/cartSlice.js";
// import React from 'react';


// const Cart = () => {
//     const cartItems = useSelector(store => store.cart.items)
//     console.log(cartItems)

//     const dispatch = useDispatch();
//     const handleClearCart = () => {
//         dispatch(clearCart())
//     }

//     return (
//         <div>
//             <h1>Cart {cartItems.length}</h1>

//             <button className="bg-green-700 text-white p-2 m-2 border-2" onClick={() => handleClearCart()}>
//                 Clear Cart
//             </button>
//             <div className="flex">
//                 {cartItems.map((item) =>

//                     <FoodItem key={item.id}{...item} />
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Cart;


// src/components/Cart.js

import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice.js";
import React from "react";
import CartItem from "./CartItem.js";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems)


    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleCheckout = () => {


        // Alternatively, you can display a confirmation message
        alert('Checkout completed! Thank you for your order.');

        // You can also clear the cart or perform any other necessary actions
        dispatch(clearCart());
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2) / 100;
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-700">Your cart is empty. Add items to your cart from the menu.</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />


                        ))}
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-700">Subtotal:</p>
                            <p className="text-gray-700">₹ {calculateTotal()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Delivery Fee:</p>
                            <p className="text-gray-700">₹ 20</p>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between font-semibold">
                            <p>Total:</p>
                            <p>₹ {(parseFloat(calculateTotal()) + 20).toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handleClearCart()}
                        >
                            Clear Cart
                        </button>
                        {/* Checkout button */}
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handleCheckout()}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
