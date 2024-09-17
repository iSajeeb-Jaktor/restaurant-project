import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl" />
                    <p className= 'bg-slate-900 text-white absolute right-0 mr-12 mb-36 px-4 py-1'>${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black border-0 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;