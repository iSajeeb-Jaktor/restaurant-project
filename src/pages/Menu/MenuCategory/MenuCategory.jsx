import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-10 mb-24'>
            {title && <Cover img={img} title={title} ></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-16'>
                <Link to={`/order/${title}`}><button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black border-0 uppercase">Order our favourite
                    food </button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;