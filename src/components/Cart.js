import { useSelector } from "react-redux";
import ResturentItemCard from "./ResturentItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";


const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());

    }

    return (
        <div className="text-center m-4 p4">
            <h1 className="font-bold text-2xl"> Cart </h1>
            <button className="text-lg bg-blue-500 text-white rounded-md m-2 p-2" onClick={handleClearCart}> Clear Cart </button>
            {cartItems.length === 0 && <h1> Cart Items are Empty. Please Add Any Items </h1>}

            <div className="w-6/12 m-auto">
                {cartItems.map((cartItem) => (
                    <ResturentItemCard key={cartItem.id} itemInfo = {cartItem} />
                ))}
            </div>
            
        </div>
    )
}

export default Cart;