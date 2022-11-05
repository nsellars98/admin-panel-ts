import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import {User} from "@firebase/auth-types"
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Main.module.css";
import auth_styles from '../../styles/Auth.module.css';

const IMG_URL = "https://cdn.dribbble.com/assets/auth/sign-in-a63d9cf6c1f626ccbde669c582b10457b07523adb58c2a4b46833b7b4925d9a3.jpg"

const authUser = auth;
export default function Enter() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authState, toggleState] = useState(false);
    const [user, setUser] = useState({} as User);
    const [error, setErr] = useState("")

    const signIn = (e: any) => {
        e.preventDefault();
        console.log("Signed Up");
        console.log(email);
        console.log(password);

        console.log(authUser)
        
        // signInWithEmailAndPassword(authUser, email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(user)
        //         toggleState(true);
        //     })
        //     .catch((err) => {
        //         const errCode = err.code;
        //         const errMsg = err.message;
        //         console.log(" => ERROR")
        //         console.log(errCode + " " + errMsg)
        //     });
        createUserWithEmailAndPassword(authUser, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toggleState(true);
                console.log("Signed Up -- Created");
                console.log(user)
                // setUser(user)
                // ...
            })
            .catch((error) => {
                console.log("Signed Up Error");
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode + " " + errorMessage);
            });
    } 

    return (
        <div className={`${styles.row} ${auth_styles.authPage}`}>
            <section className={`${styles.col} ${auth_styles.leftSide}`}>
                <header className={`${styles.col}`}>
                    <div>
                        <Image 
                            src={IMG_URL} 
                            alt="imPowered Logo" 
                            width={50}
                            height={50}
                        />
                    </div>
                    <h4>Lorum ipsum...</h4>
                </header>
                <div className={`${styles.col}`}>
                    <div>
                        <Image 
                            src={IMG_URL} 
                            alt="Art for enter now page." 
                            width={150}
                            height={100}/>
                    </div>
                </div>
                <footer>
                    <p>Art by</p>
                    <Link href={"/"}><b>lorum ipsum</b></Link> 
                </footer>
            </section>
            <section className={`${styles.col} ${auth_styles.rightSide}`}>
                <header className={`${styles.row}`}>
                    
                </header>
                <div>
                    <div>
                        {/* Holding the GUI for [email-privider] auth */}
                    </div>
                </div>
                <form className={`${styles.col} ${styles.formItem} ${auth_styles.authForm}`}>
                    <h3>Sign In to imPowered</h3>
                    <div className={`${styles.row} ${styles.topLeft}`}>
                        <label 
                            className={`${styles.formItem} ${styles.row}`}
                            htmlFor="email">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                placeholder="" />
                            <label>Email </label>
                        </label>
                    </div>
                    <div className={`${styles.row} ${styles.topLeft}`}>
                        <label 
                            className={`${styles.formItem} ${styles.row}`}
                            htmlFor="password">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="current-password"
                                name="password"
                                placeholder="" />
                            <label>Password </label>
                        </label>
                    </div>
                    {/* <label 
                        className={`${styles.col}`}
                        htmlFor="password">
                        <div>
                            <span>Password</span>
                            <Link href={"/"}><b>Forgot password?</b></Link>
                        </div>
                        <input
                            type="current-password"
                            name="password"
                            placeholder="B.Yoda@GoBigly.com"
                            onChange={(e) => setPassword(e.target.value)}/>
                    </label> */}
                    <div className={`${styles.row}`}>
                        {   
                            !authState ? 
                            <button 
                                style={{
                                    padding: "0.5rem 1.2rem"
                                }}
                                onClick={(e) => signIn(e)}>LOG IN</button> :  
                            <button disabled={true}>LOGGING IN</button> 
                        }
                    </div>

                    <div className={`${styles.row}`}>
                        {   authState ? 
                            <div>LOGGED IN</div>  : 
                            <div>NOT ACIVE USER</div> 
                        }
                    </div>
                </form>
            </section>
        </div>
    )
}