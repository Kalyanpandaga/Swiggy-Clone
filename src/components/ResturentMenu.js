import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResturentItemCategories from "./ResturentItemCategories";
import useResturentMenu from "../utils/useResturentMenu";
import {useState} from "react"


const ResturentMenu = () => {

    const resId = useParams().resId;
    const resInfo = useResturentMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null){
        return <Shimmer/>;
    };

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const itemCategoryCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center">
            <div className="res-basic-details-container">
                <h1 className="font-bold my-6 text-3xl"> {name} </h1>
                <p className="font-bold text-lg"> {cuisines.join(", ")} - {costForTwoMessage} </p>
                <p className="font-bold text-sm text-gray-600"> ★ {avgRating} </p>
            </div>
            <div className="w-6/12 m-auto">
                {
                    itemCategoryCards.map((category, index) => (
                        <ResturentItemCategories key={category.card.card.title} data = {category} showItems = {index===showIndex} setShowIndex = {() => setShowIndex(index)}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ResturentMenu;