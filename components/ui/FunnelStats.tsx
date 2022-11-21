import styles from "../../styles/Main.module.css";
import data_styles from "../../styles/Analytics.module.css";

const AllPageViews = "10,829";
const UniquePageViews = "9,124";

const upsellPageViews = "590";
const upsellUniquePageViews = "280";

const AllOrderOpt = "6,727";
const orderOptRate = "73.83%";

const upsellOpt = "0";
const upsellOptRate = "0.00%";

const oderSalesCount = "781";
const orderSalesRate = "8.56%";
const orderSalesValue = "$21,344.32";

const upsellSalesCount = "173";
const upsellSalesRate = "61.79";
const upsellSalesValue = "$1,557.00";

const oderEarning = "$1.97";
const oderEarningUnique = "$2.34";

const upsellEarning = "$4.17";
const upsellEarningUnique = "$5.56";


export const FunnelStats = () => {
    return (
        <div style={{ marginTop: "1rem" }} className={`${styles.col} ${styles.card}`}>
            <header className={`${styles.row}`}>
                <section style={{ width: "20%", justifyContent: "flex-end", height: "100%"}} className={`${styles.col}`}>
                    <div style={{padding: "1rem"}}  className={`${styles.row}`}>
                        <div className={`${styles.col}`}>
                            <h4>Order Forms</h4>
                        </div>
                    </div>
                    <div style={{padding: "1rem"}} className={`${styles.row}`}>
                        <div className={`${styles.col}`}>
                            <h4>Upsell</h4>
                        </div>
                    </div>
                    <div style={{padding: "1rem"}} className={`${styles.row}`}>
                        <div className={`${styles.col}`}>
                            <h4>Confirmation</h4>
                        </div>
                    </div>
                </section>
                <section style={{ width: "80%" }} className={`${styles.row} `}>
                    <div className={`${styles.col} ${data_styles.funnelQuickStatsHeader}`} style={{background: "#714955",  width: "15%",borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px", color: "white"}}>
                        <h5 style={{paddingLeft: "1rem"}}>Page Views</h5>
                        <div className={`${styles.row}`} style={{paddingLeft: "1rem"}}>
                            <div className={`${styles.col}`}>
                                <h5>All</h5>
                            </div>
                            <div className={`${styles.col}`}>
                                <h5>Unique</h5>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(141 92 107)", borderBottomLeftRadius: "6px"}}>
                            <div className={`${styles.col}`}>
                                <h4>{AllPageViews}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{UniquePageViews}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(141 92 107)", borderBottomLeftRadius: "6px"}}>
                            <div className={`${styles.col}`}>
                                <h4>{upsellPageViews}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{upsellUniquePageViews}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(141 92 107)", borderBottomLeftRadius: "6px"}}>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col} ${data_styles.funnelQuickStatsHeader}`}  style={{background: "#7B886B", color: "white", width: "15%"}}>
                        <h5>Opt-Ins</h5>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col}`}>
                                <h5>All</h5>
                            </div>
                            <div className={`${styles.col}`}>
                                <h5>Rate</h5>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(142 157 123)"}}>
                            <div className={`${styles.col}`}>
                                <h4>{AllOrderOpt}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{orderOptRate}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(142 157 123)"}}>
                            <div className={`${styles.col}`}>
                                <h4>{upsellOpt}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{upsellOptRate}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(142 157 123)"}}>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col} ${data_styles.funnelQuickStatsHeader}`}  style={{background: "#88BB92", color: "#373737", width: "40%"}}>
                        <h5>Sales</h5>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col} `}>
                                <h5>Count</h5>
                            </div>
                            <div className={`${styles.col} `}>
                                <h5>Rate</h5>
                            </div>
                            <div className={`${styles.col}`}>
                                <h5>Value</h5>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(157 215 169)"}}>
                            <div className={`${styles.col}`}>
                                <h4>{oderSalesCount}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{orderSalesRate}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{orderSalesValue}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(157 215 169)"}}>
                            <div className={`${styles.col}`}>
                                <h4>{upsellSalesCount}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{upsellSalesRate}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{upsellSalesValue}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(157 215 169)"}}>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col} ${data_styles.funnelQuickStatsHeader}`}  style={{background: "#94DDBC",  color: "#373737", width: "15%"}}>
                        <h5>Recurring</h5>
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col} `}>
                                <h5>Count</h5>
                            </div>
                            <div className={`${styles.col}`}>
                                <h5>Value</h5>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(168 255 216)"}}>
                            <div className={`${styles.col}`}>
                                <h4>0</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>$0.00</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(168 255 216)"}}>
                            <div className={`${styles.col}`}>
                                <h4>614</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{"$6.14"}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(168 255 216)"}}>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col} ${data_styles.funnelQuickStatsHeader}`}  style={{background: "#A0ECD0", width: "15%",  color: "#373737", borderBottomRightRadius: "6px",  borderTopRightRadius: "6px"}}>
                        <h5>Earnings / PV</h5>
                        <div className={`${styles.row} `}>
                            <div className={`${styles.col} `}>
                                <h5>All</h5>
                            </div>
                            <div className={`${styles.col}`}>
                                <h5>Unique</h5>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(174 255 225)"}}>
                            <div className={`${styles.col}`}>
                                <h4>{oderEarning}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{oderEarningUnique}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(174 255 225)"}}>
                            <div className={`${styles.col}`}>
                                <h4>{upsellEarning}</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>{upsellEarningUnique}</h4>
                            </div>
                        </div>
                        <div className={`${styles.row}`} style={{background: "rgb(174 255 225)",  borderBottomRightRadius: "6px"}}>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                            <div className={`${styles.col}`}>
                                <h4>-</h4>
                            </div>
                        </div>
                    </div>
                </section>

            </header>
        </div>
    )
}
