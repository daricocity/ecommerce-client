import React from 'react';
import Value from '../components/advert/Value';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import Footer from '../components/header/Footer';
import Advert from '../components/advert/Advert';
import Products from '../components/product/Products';
import Categories from '../components/category/Categories';

const Home = () => {
    document.title = 'Wolmart | Home';
    return (
        <div>
            <Header/>
            <Slider/>
            <Value/>
            <Advert/>
            <Categories/>
            <Products productsHome/>
            <Footer/>
        </div>
    )
}

export default Home
