import styles from "../../styles/Main.module.css";
import AllItemHeader from "../../components/ui/AllItemHeader";
import { FunctionComponent, useState } from "react";
import {
    faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    ProductContainerRow
} from "../../components/ui/ProductContainerRow";
import {
    ItemContainerHeader
} from "../../components/ui/ItemContainerHeader";
import { Product } from "../../lib/types/products";
import Underline from "../../components/ui/Underline";

const products: Product[] = [
    {
        title: "1776 Hoodie",
        status: false,
        id: "231onn00234",
        price: "$68.00",
        collections: ["SALE", "Shirts"],
        tags: ["VIP_ONLY"],
        options: ["Color", "Size"]
    },
    {
        title: "Desantis Land Hoodie",
        status: true,
        id: "2nef823f9b23f",
        price: "$72.00",
        collections: ["Best Sellers", "Hoodie"],
        tags: ["VIP_ONLY" ],
        options: ["Color", "Size"]
    }
]

const cols = [
    {
        width: "10%",
        html: '<input type="checkbox" name="" id="" />',
        id: 0
    },
    {
        width: "10%",
        html: '<input type="checkbox" name="" id="" />',
        id: 1
    },
    {
        width: "10%",
        html: '<h4>{title}</h4>',
        id: 2
    },
    {
        width: "10%",
        html: '<input type="checkbox" name="" id="" />',
        id: 2
    }
]

interface Prop {
    itemTxt: string
}

export default function  AllProducts(props: Prop) {
    const [itemSearch, setItemSearch] = useState("");

    return (
        <div className={`${styles.col}`}>
            <AllItemHeader 
                title={"Products"}
                createTxt={"Create Product"}
                createPage={"/products/create"}
                />
            <main className={`${styles.col} ${styles.container}`}>
                <div className={`${styles.col} ${styles.card}`}>
                    <div style={{ alignItems: "center"}} className={`${styles.row}`}>
                        <div  className={`${styles.row} ${styles.itemsCardHeader}`}>
                            <div><h5>ALL</h5></div>
                            <div><h5>Draft</h5></div>
                            <div><h5>Active</h5></div>
                        </div>
                        <div className={`${styles.row}  ${styles.itemsCardSearch}`}>
                            <div className={`${styles.row}`}>
                                <div
                                    className={`${styles.formItem} ${styles.row}`} >
                                    <input
                                        onChange={(e) => setItemSearch(e.target.value)}
                                        type="email"
                                        name="email"
                                        placeholder="" />
                                    <label style={{ 
                                        top: itemSearch != "" ? "-5px" : "", 
                                        fontSize: itemSearch != "" ? "10px" : ""}}>{` 🔍 Search ${props.itemTxt}` }</label>
                                </div>
                            </div>
                            <div className={`${styles.row} ${styles.itemsFilterBtn}`}>
                                <FontAwesomeIcon icon={faFilter} />
                                <h5>Active</h5>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.col} ${styles.itemsContainer}`}>
                        <ItemContainerHeader 
                            rowOneUpper={"Title"}
                            rowOneLower={"Options"}
                            rowTwoUpper={"Price"}
                            rowTwoLower={"Status"}
                            rowThree={"Collections"}
                            rowFour={"Tags"}/>
                        {products && products.map((p) => {
                            console.log("test");
                                return (
                                    <div key={p.id} className={`${styles.col} ${styles.itemRow}`}>
                                        <Underline width={100} />
                                        <ProductContainerRow 
                                            cols={cols}
                                            p={p} />
                                    </div>
                                );
                        })}
                    </div>
                </div>
                <div  className={`${styles.row} ${styles.card}`}>
                </div>
            </main>
        </div>
    )
}