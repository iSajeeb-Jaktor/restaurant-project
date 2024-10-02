import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const LocalPayment = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <div>
            <SectionTitle subheading=' Local ' heading='Payment'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full my-6">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input {...register("email", { required: true })} type="email" placeholder="Your email" className="input input-bordered w-full" />
                </label>

                <div className='flex gap-6'>
                    {/* category */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Card Holder</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered w-full" />
                    </label>
                </div>
                <button className='btn font-semibold rounded-none hover:bg-orange-500 bg-orange-500 text-white' > Pay </button>
            </form>
        </div>
    );
};

export default LocalPayment;