import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>HomeStyle Restaurant-- Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" details="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            {/* main cover */}
            <SectionTitle
                subheading="Don't miss"
                heading="Today's offer"
            ></SectionTitle>
            {/* offered items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Desserts menu item */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg} ></MenuCategory>
            <MenuCategory items={pizzas} title="pizza" img={pizzaImg} ></MenuCategory>
            <MenuCategory items={salads} title="salad" img={saladImg} ></MenuCategory>
            <MenuCategory items={soups} title="soup" img={soupImg} ></MenuCategory>

        </div>
    );
};

export default Menu;