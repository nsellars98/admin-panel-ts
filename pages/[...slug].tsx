import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGauge,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from '../styles/Main.module.css';

export default function FourOFour() {
    return (
        <div 
            style={{
                alignItems: "center"
            }}
            className={`${styles.col}`}>
            <div 
                style={{
                    width: "40%",
                    alignItems: "center"
                }}
                className={`${styles.col} ${styles.container}`}>
                <div 
                    style={{
                        textAlign: 'center',
                        color: "gray"
                    }}
                    className={`${styles.col} ${styles.card}`}>
                    <h4 
                        style={{
                            paddingBottom: "1rem"
                        }}>
                        Looks like you encounterd a broken link <br/>
                        try gong back home
                    </h4>
                    <div 
                        style={{
                            color: "var(--accent)"
                        }}>
                        <Link href={'/'} > <FontAwesomeIcon icon={faGauge} /> Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}