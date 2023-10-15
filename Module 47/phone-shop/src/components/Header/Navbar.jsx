import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="mx-2 mt-6">
            <nav className="px-6 flex align-middle items-center justify-between pb-5 shadow-md">
                <Logo></Logo>
                <ul className="flex gap-3">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-400 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>


                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-400 underline" : ""
                            }
                        >
                            Favorites
                        </NavLink>
                    </li>


                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-400 underline" : ""
                            }
                        >
                            LogIn
                        </NavLink>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export default Navbar;