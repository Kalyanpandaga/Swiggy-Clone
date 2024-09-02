import { useDispatch } from "react-redux";
import { IMAGE_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

const ResturentItemCard = (params) => {

    const {itemInfo} = params
    const {name, description, imageId, price} = itemInfo

    const dispatch = useDispatch()

    const addItemHandler = (itemInfo) => {
        dispatch(addItem(itemInfo));
    }

    return (
        <div className="boarder border-b-2 border-blue-300 flex justify-between">
            <div className="w-8/12 p-2 m-2 text-left">
                <h2 className="text-lg text-black font-bold"> {name} </h2>
                <p className="text-sm text-black font-bold"> ₹ {price/100} </p>
                <p className="text-xs text-cyan-700 font-bold">{description}</p>
            </div>
            <div className="w-3/12 p-2 m-2 h-40 static text-start">
                <button className="text-sm text-emerald-800  absolute mt-[120px] ml-8 bg-white rounded-lg py-2 px-4 font-bold" onClick={() => addItemHandler(itemInfo)}> ADD + </button>
                <img className="h-36 w-36" alt="menu-image" src={IMAGE_CDN_URL+imageId}/>
            </div>
        </div>
    );
};

export default ResturentItemCard;
