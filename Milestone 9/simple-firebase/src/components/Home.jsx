import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Link className="" to='/'>Home</Link>
            <Link to='/login'>LogIn</Link>
        </div>
    );
};

export default Home;