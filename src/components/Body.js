import ResturentCard, {withDiscountLabel} from "./ResturentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {userContext} from "../utils/userContext"


const Body = () => {

    const [listOfResturents, setListOfResturents] = useState([]);
    const [filteredResturents, setFilteredResturents] = useState([]);
    const [searchText, setSearchText] = useState("");
    const userDetails = useContext(userContext)

    const ResturentCardWithDiscountLabel = withDiscountLabel(ResturentCard);

    
    useEffect(() => {
        fetch_resturents();
    }, []);

    const fetch_resturents = async() => {
        const resturents_promise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true")
        const resturents_data = await resturents_promise.json();
        const resturents = resturents_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfResturents(resturents);
        setFilteredResturents(resturents);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1> You are in offline!!! Please Check your internet </h1>
    };


    return listOfResturents.length === 0? <Shimmer/>: (
        <div className="body">
            <div className="m-4 p-4 flex items-center">
                <input type="search" className="border border-solid, border-black" placeholder="search here"
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button 
                    className="px-4 py-1 m-4 bg-green-50 rounded-lg"
                    onClick={() => {
                        const filteredResturentsList = listOfResturents.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        
                        setFilteredResturents(filteredResturentsList)
                    }}
                >
                     Search 
                </button>

                <button 
                    className="px-4 py-1 m-4 bg-gray-100 rounded-lg" 
                    onClick={() => {
                        const filteredResturentsList = listOfResturents.filter(
                            (res) => res.info.avgRating > 4.3)
                        setFilteredResturents(filteredResturentsList)
                    }}
                > 
                    Top Rated Resturents
                </button> 
                <div>
                    <label> User Name: </label>
                    <input className="border border-solid, border-black" placeholder="search here"
                        onChange={(e) => {
                            userDetails.setUserName(e.target.value)
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-wrap">
                {filteredResturents.map((resturent) => (
                    <Link 
                        to={"/resturent/"+resturent.info.id} 
                        key={resturent.info.id}
                    > 
                        {resturent.info.aggregatedDiscountInfoV3? (
                            <ResturentCardWithDiscountLabel resData = {resturent} />
                        ) : (
                            <ResturentCard  resData={resturent}/>

                        )}
                    </Link>
                ))}
            </div>
        </div>
    );

};
    
export default Body;