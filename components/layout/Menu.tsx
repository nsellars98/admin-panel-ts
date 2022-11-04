import styles from "../../styles/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import {
    faGauge,
    faMagnifyingGlassChart,
    faUsers,
    faBasketShopping,
    faPercent,
    faMoneyBillTransfer,
    faTruckFast} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export const sideBar = () => {
//     return ()
// }

const URL = "https://cdn.shopify.com/s/files/1/0574/9263/5817/files/bigly_logo_art_file.png?v=1626380659&width=300"

export const Menu = () => {

    return (
        <nav  className={`${styles.col} ${styles.sideBar} `} style={{width: "20%"}}>
            <header className={`${styles.row} ${styles.topHeaderMobile}`}>
                <div >
                    <Image
                    src={URL}
                    alt="imPowered Logo"
                    width={90}
                    height={90}/>
                </div>
            </header>
            <ul className={`${styles.col}`}>
                <li className={`${styles.row}`}>
                    <Link  
                        className={`${styles.row}`}
                        href={'/'}>
                        <div className={`${styles.row} ${styles.menuItem} `}>
                            <i><FontAwesomeIcon icon={faGauge}/></i>
                            <span>Home</span>
                        </div>
                    </Link>
                </li>
                <li className={`${styles.row}`}>
                    <Link  
                        className={`${styles.row}`}
                        href={'/'}>
                        <div className={`${styles.row} ${styles.menuItem} `}>
                            <i><FontAwesomeIcon icon={faMagnifyingGlassChart} /></i>
                            <span>Analytics</span>
                        </div>
                    </Link>
                </li>
                <li className={`${styles.row}`}>
                    <Link  
                        className={`${styles.row}`}
                        href={'/'}>
                        <div className={`${styles.row} ${styles.menuItem} `}>
                            <i><FontAwesomeIcon icon={faPercent} /></i>
                            <span>Discounts</span>
                        </div>
                    </Link>
                </li>
                <li className={`${styles.row}`}>
                    <Link  
                        className={`${styles.row}`}
                        href={'/'}>
                        <div className={`${styles.row} ${styles.menuItem} `}>
                            <i><FontAwesomeIcon icon={faBasketShopping} /></i>
                            <span>Products</span>
                        </div>
                    </Link>
                </li>
                <li className={`${styles.row}`}>
                    <Link  
                        className={`${styles.row}`}
                        href={'/'}>
                        <div className={`${styles.row} ${styles.menuItem} `}>
                            <i><FontAwesomeIcon icon={faUsers} /></i>
                            <span>Customers</span>
                        </div>
                    </Link>
                </li>
                <li className={`${styles.row}`}>
                    <Link  
                        className={`${styles.row}`}
                        href={'/'}>
                        <div className={`${styles.row} ${styles.menuItem} `}>
                            <i><FontAwesomeIcon icon={faMoneyBillTransfer} /></i>
                            <span>Orders</span>
                        </div>
                    </Link>
                </li>
                <li className={`${styles.row}`}>
                    <Link  
                        className={`${styles.row}`}
                        href={'/'}>
                        <div className={`${styles.row} ${styles.menuItem} `}>
                            <i><FontAwesomeIcon icon={faTruckFast} /></i>
                            <span>Fulfilment</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;