import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "./firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Register = () => {

    const [accErr, setAccErr] = useState('');
    const [success, setSuccess] = useState('');
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        setAccErr('');
        setSuccess('');
        setPass('');

        if (!terms) {
            setPass('You have to accept the terms First')
            return;
        }

        else if (password.length < 6) {
            setPass('Password Must be 6 Characters');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccess(result.user);

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"

                    .then(() => {

                    })
                    .catch((error) => {
                            console.log(error);
                    })
                })
                

                sendEmailVerification(result.user)
                    .then(() => {
                        alert('please Check your email and Verify your Account')
                    });
            })
            .catch((error) => {
                console.error(error.code);
                setAccErr(error.message);
            })

    }

    return (
        <div className="flex flex-col items-center gap-5 justify-center">
            <h1>Please Register first</h1>
            <form onSubmit={handleRegister} className="flex flex-col items-center ">
                <input required className="p-4 border-4 w-96" type="text" placeholder="Enter Your Name" name="name" id="" />
                <input required className="p-4 border-4 w-96" type="email" placeholder="Enter Your Email" name="email" id="" />
                <br />
                <div className="relative">
                    <input
                        required
                        className="p-4 border-4 w-96"
                        type={showPass ? "text" : "password"}
                        placeholder="Enter Your Password"
                        name="password"
                        id="" />
                    <span className="absolute right-5 top-6" onClick={() => setShowPass(!showPass)}>
                        {
                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                </div>

                <div className="relative mt-5">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms"> Accept Out terms and Conditions</label>
                </div>

                <br />
                <input className="btn bg-amber-400 p-3 rounded-lg hover:bg-green-500" type="submit" value="Register" />
            </form>
            {
                pass && <p>{pass}</p> ||
                success && <p className="text-green-700"> Your account created</p> ||
                accErr && <p className="text-red-700">You used the same account before</p>
            }

            <p>Already have an account? Please <Link to='/login'>Log In</Link></p>
        </div>
    );
};

export default Register;