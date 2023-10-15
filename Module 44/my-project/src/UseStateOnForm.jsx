import { useState } from "react";

const UseStateOnForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(password.length<6)
        {
            setError('Passward must be 6 char')
        }
        else{
            setError('');
        }
    }

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleName} className="border-2 bg-cyan-500 text-black rounded-md border-e-2" type="text" name="name" /> <br />
                <input onChange={handleEmail} className="border-2 bg-cyan-500 text-black rounded-md border-e-2" type="email" name="email" /><br />
                <input required onChange={handlePassword} className="border-2 bg-cyan-500 text-black rounded-md border-e-2" type="password" name="password" />  <br />
                <input className="btn" type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default UseStateOnForm;