import React, { FunctionComponent, ReactNode } from "react";
import styles from "../../styles/Main.module.css";
import Link from "next/link";
import { useState } from 'react';
import Menu from "./Menu";
import { TopBar } from "./TopBar";


type Props = {
    state: boolean,
    children: ReactNode
}

export const Layout: FunctionComponent<Props> = (props) => {
    const [openState, toggleMenu] = useState(false);

    
    return (
        <div style={{
            minHeight: "100vh",
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
                    display: (window.innerWidth > 700) ?  "" : !openState ?   "none" : "",
                    height: "" + window.innerHeight + "px"
                }}>
                <div 
                    style={{
                        justifyContent: "space-between",
                    }}className={`${styles.col}`}>
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