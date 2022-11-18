import styles from "../../styles/Main.module.css";
import Underline from '../../components/ui/Underline';
import Link from 'next/link';

// Fonts
import { 
    Saira_Extra_Condensed,
} from '@next/font/google';
import React, { FunctionComponent } from "react";


const saira = Saira_Extra_Condensed({
weight: "400",
})
type Props = {
    title: string,
    children: JSX.Element,
    header: string
};
  
export const Card: React.FC<Props> = ({children, title, header}) => {
    return (
        <div className={`${styles.card}`}>
            <header className={`${styles.col}`}>
              <div className={`${styles.col}`}>
                  <p>{title}</p>
                  <h1 className={`${saira.className}`}>{header}</h1>
              </div>
              <Underline  width={100}/>
            </header>
            <main className={`${styles.col} ${styles.cardMain}`}>
                {children}
            </main>
        </div>
    )
}