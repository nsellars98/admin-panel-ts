import styles from "../../../styles/Main.module.css";
import {AnalyticsHeader} from "../../../components/ui/AnalyticsHeader";
import { FunnelStats } from "../../../components/ui/FunnelStats";

const EPC = "$1.94";
const GROSS = "$22,906.32";
const ACV = "$29.33";

export  const FunnelDailyAnalytics =  () => {
    return (
        <div className={`${styles.col}`}>
            <AnalyticsHeader title="" createTxt="" createPage=""/> 
            <main className={`${styles.col} ${styles.container}`}>
                <div className={`${styles.col} ${styles.card}`}>
                    <div className={`${styles.row}`}>
                        <div className={`${styles.col}`}>
                            <h5>Earning Per Click</h5>
                            <h2>{EPC}</h2>
                        </div>
                        <div className={`${styles.col}`}>
                            <h5>Gross Sales</h5>
                            <h2>{GROSS}</h2>
                        </div>
                        <div className={`${styles.col}`}>
                            <h5>Average Cart Values</h5>
                            <h2>{ACV}</h2>
                        </div>
                    </div>
                </div>
                <FunnelStats />
            </main>
        </div>
    )
}

export default FunnelDailyAnalytics;