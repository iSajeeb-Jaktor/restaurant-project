import React from 'react';

const Cover = ({ img, title }) => {
    return (
        <div>
            <div
                className="hero h-[700px]"
                style={{
                    backgroundImage: `url("${img}")`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase text-white">{title}</h1>
                        <p className="mb-5 text-white">
                            {title === 'our menu' && "WOULD YOU LIKE TO TRY A DISH?" || "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown..."}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;