/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./home.css"
import Cart from '../Cart/cart';

const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(0);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setAllActors(data));
    }, []);

    const handleSelectedData = (actor) => {

        const isExists = selectedActors.find((item) => item.id == actor.id);

        let cont = actor.salary;

        if (isExists) {
            return alert("You already Hired Him");
        }

        else {
            selectedActors.forEach((item) => {
                cont += item.salary;
            });

            const remaining = 25000 - cont;
            if (cont > 25000) {
                return alert("Taka Nai kiser Movie banabi");
            }

            else {
                setTotalCost(cont);
                setTotalRemaining(remaining);
                setSelectedActors([...selectedActors, actor]);
            }
        }
    }

    return (
        <div className='container'>
            <div className="home-container flex  py-12">
                <div className="card-container grid grid-cols-4 gap-5 mx-10">
                    {
                        allActors.map((actor) => (
                            <div key={actor.id} className="card">
                                <div className="card-image mb-4 mt-6">
                                    <img className='photo' src={actor.image} alt="" />
                                </div>
                                <h1 className='text-2xl text-center'>{actor.name}</h1>
                                <p className='text-sm text-center my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="info flex gap-2 justify-evenly text-base">
                                    <p>Salary: {actor.salary} USD</p>
                                    <p>{actor.role}</p>
                                </div>
                                <button onClick={() => handleSelectedData(actor)} className='button'>Select</button>
                            </div>
                        ))
                    }
                </div>

                <div className="text-container">
                    <Cart selectedActors={selectedActors} totalCost={totalCost} totalRemaining={totalRemaining}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;