import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import recommendImg1 from '../../../assets/home/slide1.jpg'
import recommendImg2 from '../../../assets/home/slide2.jpg'
import recommendImg3 from '../../../assets/home/slide4.jpg'

const Recommends = () => {
    return (
        <div>
            <SectionTitle
                subheading="Should try"
                heading="Chef recommends"
            ></SectionTitle>
            <div className='flex gap-10'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src= {recommendImg1}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-black">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black border-0 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={recommendImg2}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-black">Pizzas</h2>
                        <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce.</p>
                        <div className="card-actions">
                        <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black border-0 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={recommendImg3} 
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-black">Desserts</h2>
                        <p>Pan roasted pork belly with gratin potato, braised Savoy cabbage.</p>
                        <div className="card-actions">
                        <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black border-0 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommends;