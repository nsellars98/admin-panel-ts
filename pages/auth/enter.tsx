import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import {User} from "@firebase/auth-types"
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Main.module.css";
import auth_styles from '../../styles/Auth.module.css';
import {
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Fonts? 
import { 
    Merienda_One,
    Saira_Extra_Condensed,
    Anonymous_Pro,
} from '@next/font/google'

const meriendaOne = Merienda_One({
  weight: '400',
})

const saira = Saira_Extra_Condensed({
    weight: "400",
})

const anonPro = Anonymous_Pro({
    weight: "400",
})

const IMG_URL = "https://cdn.dribbble.com/assets/auth/sign-in-a63d9cf6c1f626ccbde669c582b10457b07523adb58c2a4b46833b7b4925d9a3.jpg"
const IMG_NFT = "https://vagazine.com/vaga_v3/wp-content/uploads/2022/04/ezgif.com-gif-maker-1.gif";
const LOGO = "https://cdn.shopify.com/s/files/1/0574/9263/5817/files/bigly_logo_art_file.png?v=1626380659&width=300";

const authUser = auth;
export default function Enter() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authState, toggleState] = useState(false);
    const [user, setUser] = useState({} as User);
    const [showPass, hidePass] = useState(false);
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
        <div className={` ${styles.row} ${auth_styles.authPage}`}>
            <section className={`${styles.col} ${auth_styles.leftSide}`}>
                <header className={`${styles.col}`}>
                    <div>
                        <Image 
                            src={LOGO} 
                            alt="imPowered Logo" 
                            width={50}
                            height={50}
                        />
                    </div>
                    <h4 className={`${saira.className} ${auth_styles.moto}`}>Lorum ipsum...</h4>
                </header>
                <div className={`${styles.col} ${auth_styles.colRight}`}>

                    <div className={`${styles.col}`}>
                        <div>
                            <Image 
                                src={IMG_NFT} 
                                alt="Art for enter now page." 
                                width={250}
                                height={200}/>
                        </div>
                    </div>
                    <footer  className={`${saira.className}`}>
                        <p>Art by</p>
                        <Link
                            className={`${auth_styles.artistList}`}
                            href={"/"}><b>lorum ipsum</b></Link> 
                    </footer>
                </div>
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
                    <h3 className={`${saira.className}`}>Sign In to </h3>
                    <div className={`${styles.row}`}>
                        <h2 className={`${meriendaOne.className} ${auth_styles.imPowered}`}>imPowered</h2>
                    </div>
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
                                type="password"
                                name="password"
                                placeholder="" />
                            <label>Password </label>
                            {/* <span><FontAwesomeIcon icon={faEyeSlash} /></span> */}
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
                    <div className={`${styles.row} ${auth_styles.btnRow}`}>
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

                    <div className={`${styles.row}  ${auth_styles.errMsgRow} ${anonPro.className}`}>
                        {   authState ? 
                            <div><p>LOGGED IN</p></div>  : 
                            <div><p>NOT ACIVE USER</p></div> 
                        }
                    </div>
                </form>
            </section>
        </div>
    )
}