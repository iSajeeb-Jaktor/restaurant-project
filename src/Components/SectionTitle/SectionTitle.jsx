import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mx-auto md:size-4/12 text-center mt-16 mb-16'>
            <p className='text-yellow-600 mb-2  '>---{subheading}---</p>
            <h3 className='text-4xl uppercase	text-black border-y-4 py-4 border-orange-300'> {heading} </h3>
        </div>
    );
};

export default SectionTitle;