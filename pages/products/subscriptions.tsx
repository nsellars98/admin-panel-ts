import styles from "../../styles/Main.module.css";

// export const AllOrders = () => {
//     return (
//         <div className={`${styles.col}`}>
//             hello
//         </div>
//     );
// }

// export default AllOrders;

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
import Underline from "../../components/ui/Underline";
import * as crypto from "crypto"
import { MainRowContainerHeader } from "../../components/ui/MainRowContainerHeader";
import { MainRowContainer } from "../../components/ui/MainRowContainer";
import { Subscriptions } from "../../lib/types/products";

const subscriptions: Subscriptions[] = [
    {
        title: "#SH-912398982",
        status: false,
        id: crypto.randomBytes(10).toString("hex"),
        price: "$29.94",
        tags: ["SALE", "Shirts"],
        email: "allMight@gobigly.com",
        first_name: "All",
        last_name: "Might",
    },
    {
        title: "#SH-92834592454",
        status: true,
        id: crypto.randomBytes(10).toString("hex"),
        price: "$164.91",
        tags: ["VIP_ONLY", "CLICK_FUNNEL"],
        email: "allMight@gobigly.com",
        first_name: "All",
        last_name: "Might",
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

const Subscriptions = (props: Prop) => {
    const [itemSearch, setItemSearch] = useState("");
    const [list, setOrders] = useState<any[]>(subscriptions);
    const [filterState, setFilter] = useState<"" | "INACTIVE" | "ACTIVE">("");

    return (
        <div className={`${styles.col}`}>
            <AllItemHeader 
                title={"Orders"}
                createPage={"/orders/create"}
                createTxt={"Create Order"}
                />
            <main className={`${styles.col} ${styles.container}`}>
                <div className={`${styles.col} ${styles.card}`}>
                    <div style={{ alignItems: "center"}} className={`${styles.row} ${styles.itemRowHContainer}`}>
                        <MainRowContainerHeader
                            list={subscriptions}
                            type={filterState}
                            setState={setOrders}
                            setFilter={setFilter} />
                        <div className={`${styles.row}  ${styles.itemsCardSearch}`}>
                            <div className={`${styles.row}`}>
                                <div
                                    className={`${styles.formItem} ${styles.row}`} >
                                    <input
                                        onChange={(e) => setItemSearch(e.target.value)}
                                        type="cardSearch"
                                        name="cardSearch"
                                        placeholder="" />
                                    <label style={{ 
                                        top: itemSearch != "" ? "-5px" : "", 
                                        fontSize: itemSearch != "" ? "10px" : ""}}>{` 🔍 Search orders` }</label>
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
                            rowOneUpper={"Order ID"}
                            rowOneLower={"Full Name"}
                            rowTwoUpper={"Order Value"}
                            rowTwoLower={"Fullfilment Status"}
                            rowThree={"Email"}
                            rowFour={"Tags"}/>
                        {list && list.map((p: Subscriptions) => {
                            console.log(p.id);
                                return (
                                    <div key={p.id} className={`${styles.col} ${styles.itemRow}`}>
                                        <Underline width={100} />
                                        <MainRowContainer
                                            href={`/orders/${p.id}`} 
                                            id={p.id}
                                            colOneTop={p.title}
                                            colOneBottom={p.first_name + " " + p.last_name}
                                            colTwoTop={p.price}
                                            colTwoBottom={p.status}
                                            colThree={p.email}
                                            colFour={p.tags} />
                                    </div>
                                );
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Subscriptions;