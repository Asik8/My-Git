/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {

    const navigate = useNavigate();

    const {id,name,email,phone} = user;

    const handleOnclick = () =>{
        navigate(`/user/${id}`)
    }

    return (
        <div className="border-2 border-r-2 mx-10 w-64 bg-slate-200 text-center my-10 p-4">
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button className="ml-4 btn" onClick={handleOnclick}>Details</button>
        </div>
    );
};

export default User;