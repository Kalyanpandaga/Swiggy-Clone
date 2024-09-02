import {IMAGE_CDN_URL} from "../utils/constants"

const ResturentCard = (props) => {
    const {resData} = props
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla} = resData?.info 
    const {slaString} = sla

    return (
        <div className="m-4 p-4 w-60 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <img className="w-56 h-32 rounded-lg" alt="food-img" src={IMAGE_CDN_URL + cloudinaryImageId}/>
            <h2 className="py-2 font-bold text-lg"> {name} </h2>
            <h4>{cuisines.join(",")} </h4>
            <h4>{avgRating} Stars</h4>
            <h5> {costForTwo} </h5>
            <h5>{slaString} </h5>
        </div>
    )
}

export const withDiscountLabel = (ResturentCard) => {
    return (props) => {
        const {resData} = props;
        const {aggregatedDiscountInfoV3} = resData?.info 
        const discontText = (aggregatedDiscountInfoV3.header? aggregatedDiscountInfoV3.header:"") + " " + 
        (aggregatedDiscountInfoV3.subHeader? aggregatedDiscountInfoV3.subHeader:"")

        return (
            <div>
                <label className="mx-8 my-[104px] p-4 rounded-lg absolute font-bold text-white text-sm h-10 w-52 bg-gradient-to-t from-slate-800 to-transparent"> {discontText} </label>
                <ResturentCard {...props}/>
            </div>
        )
    }
}

export default ResturentCard;
