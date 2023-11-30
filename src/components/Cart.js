import { useDispatch, useSelector } from "react-redux";

import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <h1>Cart {cartItems.length}</h1>

            <button className="bg-green-700 text-white p-2 m-2 border-2" onClick={() => handleClearCart()}>
                Clear Cart
            </button>
            <div className="flex">
                {cartItems.map((item) =>

                    <FoodItem key={item.id}{...item} />
                )}
            </div>
        </div>
    )
}

export default Cart;