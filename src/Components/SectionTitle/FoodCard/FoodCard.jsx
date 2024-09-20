import React from 'react';
import useAuth from '../../../hooks/useAuth';

import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';


const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLoaderData();

    const handleAddToCart = food => {
        console.log(food);
        if (user && user.email) {
            // TODO: send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to Your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send to the user login page 
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl" />
                <p className='bg-slate-900 text-white absolute right-0 mr-12 mb-36 px-4 py-1'>${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black border-0 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;