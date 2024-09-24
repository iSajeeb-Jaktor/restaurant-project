import React from 'react';
import errorImg from '../../assets/404.gif'
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center mt-16'>
                <img src={errorImg} alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to='/'><button className='btn bg-orange-500 hover:bg-orange-500 text-lg font-semibold text-white mt-4' >Back To Home <AiFillHome className= 'font-semibold text-xl'></AiFillHome></button></Link>
            </div>
        </div>
    );
};

export default Error;