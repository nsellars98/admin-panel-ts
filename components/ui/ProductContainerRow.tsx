import { FunctionComponent } from "react";
import { Product } from "../../lib/types/products";

// styling
import styles from "../../styles/Main.module.css";
import Underline from "./Underline";

export interface ColFromList {
    width: string,
    html: string,
    id: number
}
export const ProductContainerRow: FunctionComponent<any>  = ({p }) => {

    const PRODUCT: Product = p;
    const { title, status, options, price, collections, tags } = PRODUCT;

    return (
        <div 
            style={{
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "1rem 0",
                color: "gray"
            }}
            className={`${styles.row}`}>
            <div 
                style={{
                    width: "5%",
                    alignItems: "center"
                }} className={`${styles.col} ${styles.checkboxMobile}`}>
                <input type="checkbox" name="" id="" />
            </div>
            <div 
                style={{
                    width: "30%",
                    justifyContent: "flex-start"
                }} 
                className={`${styles.col} ${styles.rowOneMobile}`}>
                <span 
                    style={{
                        fontSize: "1rem",
                    }}>{title}</span>
                <div 
                    style={{
                        fontSize: "1rem",
                        justifyContent: "flex-start"
                    }}
                    className={`${styles.row}`}>
                    {options?.map((option, i) => (<p className={`${styles.rowSubHead}`}>{option} {i != options.length-1 ? ", " : ""}</p>) )}
                </div>
            </div>
            <div 
                style={{
                    width: "15%",
                    justifyContent: "flex-start"
                }} 
                className={`${styles.col} ${styles.rowTwoMobile}`}>
                <span 
                style={{
                    fontSize: "1rem"
                }}>{price}</span>
                {status ? <p
                     style={{
                        background: "#aff2af",
                        border: "1px solid #7aff7a",
                        color: "gray"
                    }} className={`${styles.statusSubHead}`}>Active</p> : <p className={`${styles.statusSubHead}`}>Drafted</p> }
            </div>
            <div 
                style={{
                    width: "30%",
                    justifyContent: "flex-start",
                    overflow: "hidden"
                }} 
                className={`${styles.row} ${styles.noneMobile}`}>
                {collections?.map((collection, i) => (<p className={`${styles.tagRowItem}`}>{collection}{i != collections.length-1 ? ", " : ""}</p>) )}
            </div>
            <div 
                style={{
                    width: "20%",
                    justifyContent: "flex-start"
                }} 
                className={`${styles.row} ${styles.noneMobile}`}>
                {tags?.map((tag, i) => (<p>{tag}{i != tags.length-1 ? ", " : ""}</p>) )}
            </div>
        </div>
    )
}