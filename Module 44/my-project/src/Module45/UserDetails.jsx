import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {

    const navigate = useNavigate();

    const user = useLoaderData();
    const { name } = user;

    const handleHomeBtn = () => { 
        navigate(-1);
    }

    return (
        <div>
            <p>User name is: {name}</p>
            <button onClick={handleHomeBtn}>Home</button>
        </div>
    );
};

export default UserDetails;