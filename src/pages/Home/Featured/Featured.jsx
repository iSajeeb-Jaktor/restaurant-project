import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import FeaturedIMG from "../../../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
    return (
        <div className='bg-fixed  featured-item pt-6 my-10'>
            <SectionTitle
                subheading="Check it out"
                heading="From our menu"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-950 bg-opacity-60 pb-20 pt-12 ps-36 text-white'>
                <div >
                    <img src={FeaturedIMG} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Sep 16, 2024</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptas, officiis impedit praesentium perferendis fugit omnis ea a sunt fuga totam sit inventore rem aperiam commodi? Eligendi reiciendis repellendus exercitationem.</p>
                    <button className="btn uppercase text-yellow-600 hover:bg-yellow-600 hover:text-black border-0 border-b-4 mt-5">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;