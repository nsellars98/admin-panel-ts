import React from "react";
import styles from "../../styles/Main.module.css";

export const Layout = (props: any) => {
    return (
        <div className={`${styles.row} `}>
            <nav style={{width: "30%", background: "red"}}>
                TESTs
            </nav>
            <main style={{width: "70%", background: "blue"}}>
                <header >
                    HEADER
                </header>
                    {props?.children}
                <footer>
                    Bigly 
                </footer>
            </main>

        </div>
    )
}

export default Layout;