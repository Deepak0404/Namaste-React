import { restaurantList } from '../contents'
import RestaurantsCard from './RestaurantsCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

// What is state?
// What is React Hook? - Are normal JS functions
// What is useState?
//  - Used to create local varibles in your application
//  - Used for two way data binding

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
    return filteredData
}

const Body = () => {
    // React state variables
    // This function returns an array and the first element of the array is variable name
    // searchText is local state variable

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('') // return = [variable name, function to update the variable]

    // loads => render => API => Update UI
    // useEffect is used to achive this
    // - useEffect is a function with two parameters callback function and dependency array
    // - useEffect's callback function not called imedately, only when useEffect wants to call
    // - use dependancy array to control rendering of the function again and again
    // - If dependancy array is empty, it will be called just once and after initail render

    useEffect(() => {
        // API call
        getRestaurantList()
        console.log('useEffects')
    }, [])

    async function getRestaurantList() {
        try {
            const data = await fetch(
                'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73057979999999&lng=77.7758825&page_type=DESKTOP_WEB_LISTING'
            )
            const json = await data.json()
            console.log(json)
            // Optional Chaining
            setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards)
            setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards)
        } catch (error) {
            console.log(error)
        }
    }
    console.log('render')
    console.log(filteredRestaurants)

    // Avoid Rendering or not render component (Early return)
    if (!allRestaurants) return null

    // if (filteredRestaurants?.length === 0) return <h2>No restaurant match your filter!!</h2>

    // Conditional Rendering
    // if restaurant is empty => Shimmer UI
    // if restaurant has data => actual data UI
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    value={searchText}
                    placeholder=""
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        // need to filter the data
                        const data = filterData(searchText, allRestaurants)
                        // update the state - restaurants
                        setFilteredRestaurants(data)
                    }}
                >
                    Search
                </button>
            </div>
            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="restaurant-list">
                    {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
                    {filteredRestaurants.map((restaurant) => {
                        return <RestaurantsCard {...restaurant.data} key={restaurant.data.id} />
                    })}
                </div>
            )}
        </>
    )
}

export default Body
