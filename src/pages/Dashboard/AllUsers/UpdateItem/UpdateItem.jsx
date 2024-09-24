import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { name, category, recipe, price, _id } = useLoaderData();


    const onSubmit = async (data) => {
        console.log(data)
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
        }

        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

        if (menuRes.data.modifiedCount > 0) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
        }


    }


    return (
        <div>
            <SectionTitle
                heading="Update item"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                    </label>

                    <div className='flex gap-6'>
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soups</option>
                                <option value="dessert">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        {/* price */}

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input defaultValue={price} {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>

                    <div className='flex items-center'>
                        <button className='btn mt-5 font-semibold rounded-none hover:bg-orange-500 bg-orange-500 text-white px-12' > Update Recipe Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;