import { IMG_CDN_URL } from "../contents";

const RestaurantsCard = ({name, cloudinaryImageId, cuisines, totalRatings}) => {
    // console.log(restaurant);
    return(
        <div className="restaurants-card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="card image"/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <p>{totalRatings} Stars</p>
        </div>
    )
}

export default RestaurantsCard;