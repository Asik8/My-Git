/* eslint-disable no-unused-vars */
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {

    const [userErr, setUserErr] = useState('');
    const [success, setSuccess] = useState('');
    const setRef= useRef();

    const handleLogIn = e => {

        e.preventDefault();

        setUserErr('');

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if(result.user.emailVerified)
                {
                    setSuccess(result.user)
                }
                else{
                    alert('Please Verify your Mail')
                }
            })
            .catch(error =>
                setUserErr('Enter valid Email and Password')
            )

    }

    const resetPass = () =>{
        const email = setRef.current.value;

        setUserErr('');
        
        if(!email)
        {
            setUserErr('Enter a Email')
            return;
        }

        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setUserErr('Enter a valid Email')
            return;
        }

        sendPasswordResetEmail(auth,email)
        .then(() => {
           alert('please check your email')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
          });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={setRef} placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a onClick={resetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        {
                            userErr && <p>{userErr}</p>
                        }

                        <p>New to this website? Please <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;