import ResturentItemCard from "./ResturentItemCard";
import {useEffect} from "react";

const ResturentItemCategories = ({ data, showItems, setShowIndex}) => {
    const {title, itemCards} = data?.card?.card;

    const toggleShowItems = () => {
            setShowIndex()
    }

    return (
        <div className="bg-gray-200 shadow-lg p-4 my-4 cursor-pointer">
            <div className="flex justify-between" onClick={toggleShowItems}>
                <span className="font-bold text-lg"> {title} ({itemCards.length})</span>
                <span className="font-bold text-lg"> 🔽</span>
            </div>
            {showItems && itemCards.map((itemCard) => (
                <ResturentItemCard key={itemCard.card.info.id} itemInfo = {itemCard?.card?.info} />
            ))}
        </div>
    );
};

export default ResturentItemCategories;
