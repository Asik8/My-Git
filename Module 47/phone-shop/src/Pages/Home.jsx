/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Phones from "../components/Phones";
import Banner from "../components/banner";

const Home = () => {

    const phones = useLoaderData();


    return (
        <div className="">
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;