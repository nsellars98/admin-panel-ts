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
            minWidth: "100vh",
            overflow: "hidden"
        }} className={`${styles.row}`}>

            {/* TODO: SIDE NAV COMP */}
            <Menu />
           
            <main className={`${styles.col} ${styles.mainContainer}`}style={{width: "70%", background: "blue"}}>
                <TopBar state={props.state} />
                {props.children}
                <footer  className={`${styles.row} ${styles.footer}`}>
                    Bigly 
                </footer>
            </main>

        </div>
    )
}

export default Layout;