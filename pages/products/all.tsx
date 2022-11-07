import styles from "../../styles/Main.module.css";
import AllItemHeader from "../../components/ui/AllItemHeader";

export default function AllProducts() {
    return (
        <div className={`${styles.col}`}>
            <AllItemHeader 
                title={"Products"}
                createTxt={"Create Product"}
                createPage={"/products/create"}
                />
            <main className={`${styles.col} ${styles.container}`}>
                <div className={`${styles.col} ${styles.card}`}>

                </div>
                <div  className={`${styles.row} ${styles.card}`}>
                    
                </div>
            </main>
        </div>
    )
}