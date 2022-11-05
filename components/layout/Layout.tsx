import React, { FunctionComponent, ReactNode } from "react";
import styles from "../../styles/Main.module.css";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useState } from 'react';
import Menu from "./Menu";
import { TopBar } from "./TopBar";

const authState = auth;

type Props = {
    state: boolean,
    children: ReactNode
}

export const Layout: FunctionComponent<Props> = (props) => {
    const [openState, toggleMenu] = useState(false);
    
    // Check status of FB User
    // onAuthStateChanged(authState, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     setAuth(true);
    //     console.log(uid)
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });
    
    return (
        <div style={{
            minHeight: "100vh",
            maxHeight: "100vh",
            overflow: "hidden"
        }} className={`${styles.row} `}>
            <div
                style={{
                    display: !openState ? "" : "none"
                }} 
                className={styles.mainLayout}></div>
            <div
                style={{
                    display: !openState ? "" : "none"
                }} 
                className={styles.blur}></div>

            {/* TODO: SIDE NAV COMP */}
            <Menu openState={openState} toggleMenu={toggleMenu} />
           
            <main 
                className={`${styles.col} ${styles.mainContainer}`}
                style={{
                    justifyContent: "space-between",
                }}>
                <div className={`${styles.col}`}>
                    <TopBar openState={openState} toggleMenu={toggleMenu} state={props.state} />
                    {props.children}
                </div>
                {/* <footer  className={`${styles.row} ${styles.footer}`}>
                    Bigly 
                </footer> */}
            </main>

        </div>
    )
}

export default Layout;