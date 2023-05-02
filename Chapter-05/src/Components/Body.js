import { restaurantList } from "../contents";
import RestaurantsCard from "./RestaurantsCard";
import { useState } from "react";

// What is state?
// What is React Hook? - Are normal JS functions
// What is useState? - Used for two way data binding

const Body = () => {

// normal JS variables
// const searchText = "KFC";

// React state variables
// This function returns an array and the first element of the array is variable name
// searchText is local state variable

const [searchText, setSearchText] = useState("KFC"); // return = [variable name, function to update the variable]
const [searchClicked, setSearchClicked] = useState("false");

    return(
        <>
            <div className="search-container">
                <input 
                    type="text"
                    className="search-input" 
                    value={searchText} 
                    placeholder=""
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn" 
                    onClick={()=>{searchClicked === "true" ? setSearchClicked("false") : setSearchClicked("true")}}
                    >
                Search</button>
            </div>
            <h2>{searchClicked}</h2>
            <div className="restaurant-list">
                {
                    restaurantList.map(restaurant => {
                        return <RestaurantsCard {...restaurant.data} key={restaurant.data.id}/>
                    })
                }
            </div>
        </>
    )
}

export default Body;