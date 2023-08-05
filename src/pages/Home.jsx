import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Products from '../components/Categories'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Products />
        </div>
    )
}

export default Home
