/* eslint-disable no-unused-vars */
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const LogIn = () => {
    const [users, setUsers] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGooglePopup = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser);
                setUsers(LoggedInUser);
            })
            .catch((error) => {
               console.log(error);
            });
    }

    const handleGithubPopup = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser);
                setUsers(LoggedInUser);
            })
            .catch((error) => {
               console.log(error);
            });
    }

    const handleGoogleOut = ()=>{
        signOut(auth)
        .then((result)=>{
            console.log(result);
            setUsers(null);
        })
        .catch(error =>{
            console.log(Error);
        })
    }

    return (
        <div>
            {
                users ? <button onClick={handleGoogleOut}>Log Out</button> :
                <div>
                    <button onClick={handleGooglePopup}>Google Login</button>
                    <button onClick={handleGithubPopup}>Github Login</button>
                </div>
            }
            {users &&
                <div className="flex flex-col items-center justify-center">
                    <h1>User: {users.displayName}</h1>
                    <p>Email: {users.email}</p>
                    <img src={users.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default LogIn;