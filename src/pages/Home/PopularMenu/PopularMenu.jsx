import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-16'>
            <SectionTitle
                subheading="Check it out"
                heading="From our menu"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-14'>
            <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black border-0 uppercase">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;