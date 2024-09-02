const useResturents = () => {
    
    const fetch_resturents = async() => {
        const resturents_promise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true")
        const resturents_data = await resturents_promise.json()
        const resturents = resturents_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    };

    return fetch_resturents();
};

export default useResturents;