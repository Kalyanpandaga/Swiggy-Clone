import { useState, useEffect } from "react";
import {GET_RESTURENT_DETAILS_API} from "./constants";


const useResturentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(GET_RESTURENT_DETAILS_API + resId);
        const jsonData = await data.json(); 
        setResInfo(jsonData?.data);
    };

    return resInfo;
}

export default useResturentMenu;