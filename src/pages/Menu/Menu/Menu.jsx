import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant -- Menu</title>
                
            </Helmet>
            <Cover img={menuImg} title="our menu" details="WOULD YOU LIKE TO TRY A DISH?"></Cover>
        </div>
    );
};

export default Menu;