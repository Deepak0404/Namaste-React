/*
Header
    - Logo
    - Navbar
        - Home
        - About
        - Contact US
        - Cart
Body
    - Search bar
    - RestaurantList
        - RestaurantsCard
            - Image
            - Name
            - Reating
            - Causins
Footer
    - Links
    - Copyright
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

// Config Driven UI
/*
data?.name => Optional Chaining
props => properties (props name is not mendatory)

Destructuring:
    const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    // is equivalent to:
    // const a = obj.a;
    // const b = obj.b;

Vertiual DOM: 
    - Virtual dom is the concept of software engineering 
    - It's representation of real DOM in our code
    - Vertiual DOM uses Reconcilation
    - Reconcialation uses diff algorithm that finds out the diffrence bwt DOM trees and checks which part needs to update
    - It will rerender only the specific portion of the code which is found by diff algorithm
    - It only update which part of DOM is changed (like git diff) to track the updated part we use unique keys

React Fiber:
    React 16 diff algorithm changed by react fiber that is new reconcilation engine
*/

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
