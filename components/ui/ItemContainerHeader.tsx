import { FunctionComponent } from "react";
import styles from "../../styles/Main.module.css";

export const ItemContainerHeader: FunctionComponent<any> = ({
    rowOneUpper,
    rowOneLower,
    rowTwoUpper,
    rowTwoLower,
    rowThree,
    rowFour
}) => {
    return (
        <div 
            style={{
                justifyContent: "flex-start",
                alignItems: "flex-end",
                paddingBottom: "1rem",
                // borderBottom: "1px solid gray"
            }}
            className={`${styles.row}`}>
            <div 
                style={{
                    width: "5%",
                    alignItems: "center"
                }} className={`${styles.col}`}>
                <input type="checkbox" name="" id="" />
            </div>
            <div 
                style={{
                    width: "30%"
                }} 
                className={`${styles.col}`}>
                <span 
                style={{
                    fontSize: "1rem"
                }}>{rowOneUpper}</span>
                <p>{rowOneLower}</p>
            </div>
            <div 
                style={{
                    width: "15%"
                }} 
                className={`${styles.col}`}>
                <span 
                style={{
                    fontSize: "1rem"
                }}>{rowTwoUpper}</span>
                <p>{rowTwoLower}</p>
            </div>
            <div 
                style={{
                    width: "30%"
                }} 
                className={`${styles.col}`}>
                <p>{rowThree}</p>
            </div>
            <div 
                style={{
                    width: "20%"
                }} 
                className={`${styles.col}`}>
                <p>{rowFour}</p>
            </div>
        </div>
    )
}