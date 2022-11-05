import styles from "../../styles/Main.module.css";

export const Underline = () => {
    return (
        <div 
            className={`${styles.row}`}
            style={{
                padding: "0 2rem",
            }}>
            <div 
                className={`${styles.underline}`} 
                style={{
                    padding: "0 2rem",
                    width: "40%"
                }}></div>
        </div>
    )
}

export default Underline;