import styles from "../../styles/Main.module.css";
import Link from "next/link";
import Image from "next/image";

// export const sideBar = () => {
//     return ()
// }

const URL = "https://cdn.shopify.com/s/files/1/0574/9263/5817/files/bigly_logo_art_file.png?v=1626380659&width=300"

export const Menu = () => {

    return (
        <nav  className={`${styles.col} ${styles.sideBar} `} style={{width: "30%"}}>
            <header className={`${styles.row} ${styles.topHeaderMobile}`}>
                <div>
                    <Image
                    src={URL}
                    alt="imPowered Logo"
                    width={90}
                    height={50}/>
                </div>
            </header>
            <ul>
                <li>
                    <Link href={'/'}>
                        <div>
                            <i>🏠</i>
                            <span>Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>
                            <i>🧐</i>
                            <span>Analytics</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>
                            <i>💸</i>
                            <span>Discounts</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>
                            <i>💻</i>
                            <span>Products</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>
                            <i>{"👽"}</i>
                            <span>Customers</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>
                            <i>{"📋"}</i>
                            <span>Orders</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>
                            <i>{"📦"}</i>
                            <span>Fulfilment</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;