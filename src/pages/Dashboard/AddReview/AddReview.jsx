import React, { useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaRocket, FaStar } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import '../AddReview/AddReview.css'

import Swal from 'sweetalert2';
import { data } from 'autoprefixer';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ratings, setRatings] = useState(null);
    const [hover, setHover] = useState(null);
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)

        const reviewItem = {
            name: data.name,
            liked: data.liked,
            suggestion: data.suggestion,
            details: data.details,
            rating: (data.rating)

        }

        const reviewRes = await axiosSecure.post('/reviews', reviewItem);
        console.log(reviewRes);
        if (reviewRes.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <div>
            <SectionTitle subheading=' Sharing is Caring!!! ' heading='Give a review'></SectionTitle>
            <div>

                <form className='p-14' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='uppercase text-center text-2xl font-semibold text-black'>Rate Us!</h2>

                    <div className='flex justify-center'>
                        {[...Array(5)].map((star, index) => {
                            const currentRating = index + 1;

                            return (
                                <label>
                                    <input
                                        type="tel"
                                        name='rating'
                                        value={currentRating}
                                        onClick={() => setRatings(currentRating)}
                                    />
                                    <FaStar
                                        className='star'
                                        size={50}
                                        color={currentRating <= (hover || ratings) ? "#ffc107" : "#e4e5e9"}
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                    ></FaStar>
                                </label>
                            )

                        })}
                       
                    </div>

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Name*</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered w-full" />
                    </label>


                    {/* recipe like most */}
                    <label className="form-control mt-11">
                        <div className="label">
                            <span className="label-text">Which recipe you liked most?</span>
                        </div>
                        <textarea {...register("liked", { required: true })} className="textarea textarea-bordered h-28" placeholder="Recipe you liked most"></textarea>
                    </label>

                    {/* suggestion */}
                    <label className="form-control my-10">
                        <div className="label">
                            <span className="label-text">Do you have any suggestion for us?</span>
                        </div>
                        <textarea {...register("suggestion", { required: true })} className="textarea textarea-bordered h-28" placeholder="Suggestion"></textarea>
                    </label>

                    {/* review details  */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Kindly express your care in a short way.</span>
                        </div>
                        <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-60" placeholder="Review in detail"></textarea>
                    </label>

                    <button className='btn font-bold px-7 text-xl rounded-none mt-10 hover:bg-orange-500 bg-orange-500 text-white' > Send Review <FaRocket /> </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;