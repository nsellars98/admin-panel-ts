import { FunctionComponent } from "react";
import styles from "../../styles/Main.module.css";
interface Props {
    width: number
}

export const Underline: FunctionComponent<Props> = ({width}) => {
    return (
        <div 
            className={`${styles.row}`}
            style={{
                // padding: "0 2rem",
            }}>
            <div 
                className={`${styles.underline}`} 
                style={{
                    // padding: "0 2rem",
                    width: "" + width + "%"
                }}></div>
        </div>
    )
}

export default Underline;