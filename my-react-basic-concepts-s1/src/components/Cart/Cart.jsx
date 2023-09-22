/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./cart.css"


// One Way

// const Cart = (props) => {
//     return (
//         <div>
//             <h1>Hello all set to go</h1>
//         </div>
//     );
// };


// Another Way
// eslint-disable-next-line react/prop-types
const Cart = ({ selectedActors,totalCost, totalRemaining }) => {
    return (
        <div className='mx-10 div-style'>
            <h1 className='list-title'>Totals Team Members: {selectedActors.length}</h1>
            <h1>Total Remaining: {totalRemaining}</h1>
            <h1>Total Total Cost: {totalCost}</h1>
            {selectedActors.map((actor) => (
                <li className='text-base text-gray-50'>{actor.name}</li>
            ))}
        </div>
    );
};

export default Cart;