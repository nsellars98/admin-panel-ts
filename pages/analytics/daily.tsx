import Link from "next/link";
import AllItemHeader from "../../components/ui/AllItemHeader";
import { Card } from "../../components/ui/Card";
import { numberFormat } from "../../lib/helpers/formatters";
import styles from "../../styles/Main.module.css";

const TOTAL_SALES = "420069.89";
const TOTAL_ORDERS = "159";

const TOTAL_SESSIONS = "750";
const TOTAL_CARTS = "234";
const TOTAL_CHECKOUTS = TOTAL_ORDERS;

const RETURNS = "-173.31"

const TOTAL_AOV = "28.78"

const TOTAL_ORDERS_ONLINE = "98";
const TOTAL_SALES_ONLINE = "23150.93";

const TOTAL_ORDERS_FUNNELS = "47";
const TOTAL_SALES_FUNNELS = "13804.56";

const TOTAL_ORDERS_TAPCART = "15";
const TOTAL_CHECKOUTS_TAPCART = "2123.04";

export default function Daily() {
    return (
        <div className={`${styles.col}`}>
            <AllItemHeader 
                title={"Store Analytics"}
                createPage={"/analytics/create"}
                createTxt={"Create Report"}
                />
            <main className={`${styles.col}`}>
                <div className={`${styles.col} ${styles.container}`}>
                    <div className={`${styles.row}`}>
                        <div className={`${styles.col} ${styles.oneThird}`}>
                            <Card title='Sales Breakdown' header={numberFormat(Number(TOTAL_SALES))} subHeader="total sales">
                                <div className={styles.col}>
                                    <div className={`${styles.row}`}>
                                    <p style={{width: "50%"}}>Channel </p>
                                    <p style={{width: "20%"}}>Total</p>
                                    <p style={{width: "20%"}}><b>Sales</b></p>
                                    </div>
                                    <div className={`${styles.row}`}>
                                    <p style={{width: "50%"}}>Online Store </p>
                                    <p style={{width: "20%"}}>{TOTAL_ORDERS_ONLINE} orders</p>
                                    <p style={{width: "20%"}}><b>{ numberFormat(Number(TOTAL_SALES_ONLINE)) }</b></p>
                                    </div>
                                    <div className={`${styles.row}`}>
                                    <p style={{width: "50%"}}>Funnels </p>
                                    <p style={{width: "20%"}}>{TOTAL_ORDERS_FUNNELS} orders</p>
                                    <p style={{width: "20%"}}><b>{numberFormat(Number(TOTAL_SALES_FUNNELS))}</b></p>
                                    </div>
                                    <div className={`${styles.row}`}>
                                    <p style={{width: "50%"}}>Tap Cart </p>
                                    <p style={{width: "20%"}}>{TOTAL_ORDERS_TAPCART} orders</p>
                                    <p style={{width: "20%"}}><b>{numberFormat(Number(TOTAL_CHECKOUTS_TAPCART))}</b></p>
                                    </div>
                                </div>
                            </Card>     
                        </div>
                        <div  className={`${styles.col} ${styles.oneThird}`}>
                            <Card title='Average Order Value' header={numberFormat(Number(TOTAL_AOV))}>
                                <div className={`${styles.col}`}>
                                    <div className={`${styles.row}`}>
                                        <p>Total Orders: <b>{TOTAL_ORDERS}</b></p>
                                        <Link className={styles.linkText} href={"/analytics/daily"}><p>View Details</p></Link>
                                    </div>
                                    <div>TEST</div>
                                </div>
                            </Card>
                        </div>
                        <div className={`${styles.col} ${styles.oneThird}`}>
                            <Card title='Total Sales' header={numberFormat(Number(TOTAL_SALES))}>
                                <div className={`${styles.row}`}>
                                    <p>Total Orders: <b>{TOTAL_ORDERS}</b></p>
                                    <Link className={styles.linkText} href={"/analytics/daily"}><p>View Details</p></Link>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div style={{paddingTop: "1rem"}} className={`${styles.row}`}>
                        <div className={`${styles.col} ${styles.oneThird}`}>
                            <Card title='Total Sales' header={numberFormat(Number(TOTAL_SALES))}>
                                <div className={`${styles.row}`}>
                                    <p>Total Orders: <b>{TOTAL_ORDERS}</b></p>
                                    <Link className={styles.linkText} href={"/analytics/daily"}><p>View Details</p></Link>
                                </div>
                            </Card>
                        </div>
                        <div  className={`${styles.col} ${styles.oneThird}`}>
                            <Card title='Total Sales' header={numberFormat(Number(TOTAL_SALES))}>
                                <div className={`${styles.row}`}>
                                    <p>Total Orders: <b>{TOTAL_ORDERS}</b></p>
                                    <Link className={styles.linkText} href={"/analytics/daily"}><p>View Details</p></Link>
                                </div>
                            </Card>
                        </div>
                        <div  className={`${styles.col} ${styles.oneThird}`}>
                            <Card title='Total Sales' header={numberFormat(Number(TOTAL_SALES))}>
                                <div className={`${styles.row}`}>
                                    <p>Total Orders: <b>{TOTAL_ORDERS}</b></p>
                                    <Link className={styles.linkText} href={"/analytics/daily"}><p>View Details</p></Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}