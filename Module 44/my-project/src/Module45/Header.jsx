import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink className="mr-4" to="/home">Home</NavLink>
            <NavLink className="mr-4" to="/users">Users</NavLink>
            <NavLink className="mr-4" to="/contact">Contact Us</NavLink>
            <NavLink className="mr-4" to="/about">About US</NavLink>
        </div>
    );
};

export default Header;