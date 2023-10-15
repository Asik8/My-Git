/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {title, price, features} = option;
    console.log(title, price, features);
    return (
        <div className='bg-blue-300 p-6 rounded-lg text-center flex flex-col'>
            <h2>
                <span className='text-2xl font-extrabold'>{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-4 flex-grow'>{title}</h4>
            {
                features.map((feature)=>
                <p>{feature}</p>
                )
            }

            <button className='bg-green-400 w-full py-2 rounded-xl hover:bg-green-900 hover:text-white mt-3'>Boy Now</button>
        </div>
    );
}; 

PriceOption.prototype = {
    option: PropTypes.object
}

export default PriceOption;