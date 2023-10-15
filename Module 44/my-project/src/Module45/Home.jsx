import Header from "./header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>You are in the home</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;