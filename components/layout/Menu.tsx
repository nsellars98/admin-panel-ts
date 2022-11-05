import styles from "../../styles/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
    faGauge,
    faMagnifyingGlassChart,
    faUsers,
    faBasketShopping,
    faPercent,
    faMoneyBillTransfer,
    faTruckFast,
    faSliders,
    faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Underline from "../ui/Underline";
import { Dispatch, FC, FunctionComponent, SetStateAction, useState } from "react";

const URL = "https://cdn.shopify.com/s/files/1/0574/9263/5817/files/bigly_logo_art_file.png?v=1626380659&width=300";
type Props = {
    openState: boolean,
    toggleMenu: Dispatch<SetStateAction<boolean>>
}
export const Menu: FunctionComponent<Props> = ({openState, toggleMenu}) => {

    const router = useRouter();
    console.log(router.pathname)

    return (
        <nav 
            className={`${styles.col} ${styles.sideBar} `} 
            style={{
                marginLeft: openState ? "-600px" : "0",
            }}>
            <header className={`${styles.col} ${styles.topHeaderMobile}`}>
                <div className={`${styles.row}`}>
                    <Image
                    src={URL}
                    alt="imPowered Logo"
                    width={90}
                    height={90}/>
                    <div 
                        onClick={(e) => toggleMenu(!openState)}
                        className={`${styles.row} ${styles.mobileExit}`}>
                        <div><FontAwesomeIcon icon={faArrowRightFromBracket} /></div>
                    </div>
                </div>
            </header>
            <div className={`${styles.col} ${styles.menu} `}>
                <Underline />
                <ul className={`${styles.col}`}>
                    <li className={`${styles.menuItem} ${styles.menuTitle}`}>
                        <p>Menu</p>
                    </li>
                    <li className={`${styles.row}`}>
                        <Link  
                            className={`${styles.row}`}
                            style={{
                                borderLeft: router.pathname == "/" ? "4px solid white" : "4px solid transparent"
                            }}
                            href={'/'}>
                            <div className={`${styles.row} ${styles.menuItem} `}>
                                <i
                                    style={{
                                        color: router.pathname == "/" ? "white" : ""
                                    }}><FontAwesomeIcon icon={faGauge}/></i>
                                <span 
                                    style={{
                                        color: router.pathname == "/" ? "white" : ""
                                    }}>Home</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${styles.row}`}>
                        <Link  
                            className={`${styles.row}`}
                            style={{
                                borderLeft: router.pathname.includes("/analytics") ? "4px solid white" : "4px solid transparent",
                            }}
                            href={'/analytics/daily'}>
                            <div className={`${styles.row} ${styles.menuItem} `}>
                                <i 
                                    style={{
                                        color: router.pathname.includes("/analytics") ? "white" : ""
                                    }}>
                                    <FontAwesomeIcon icon={faMagnifyingGlassChart} /></i>
                                <span 
                                    style={{
                                        color: router.pathname.includes("/analytics") ? "white" : ""
                                    }}>Analytics</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${styles.row}`}>
                        <Link  
                            className={`${styles.row}`}
                            style={{
                                borderLeft: router.pathname.includes("/discounts") ? "4px solid white" : "4px solid transparent"
                            }}
                            href={'/'}>
                            <div className={`${styles.row} ${styles.menuItem} `}>
                                <i
                                    style={{
                                        color: router.pathname.includes("/discounts") ? "white" : ""
                                    }}><FontAwesomeIcon icon={faPercent} /></i>
                                <span
                                    style={{
                                        color: router.pathname.includes("/discounts") ? "white" : ""
                                    }}>Discounts</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${styles.row}`}>
                        <Link  
                            className={`${styles.row}`}
                            style={{
                                borderLeft: router.pathname.includes("/products") ? "4px solid white" : "4px solid transparent"
                            }}
                            href={'/'}>
                            <div className={`${styles.row} ${styles.menuItem} `}>
                                <i
                                    style={{
                                        color: router.pathname.includes("/products") ? "white" : ""
                                    }}><FontAwesomeIcon icon={faBasketShopping} /></i>
                                <span
                                    style={{
                                        color: router.pathname.includes("/products") ? "white" : ""
                                    }}>Products</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${styles.row}`}>
                        <Link  
                            className={`${styles.row}`}
                            style={{
                                borderLeft: router.pathname.includes("/customers") ? "4px solid white" : "4px solid transparent"
                            }}
                            href={'/'}>
                            <div className={`${styles.row} ${styles.menuItem} `}>
                                <i
                                    style={{
                                        color: router.pathname.includes("/customers") ? "white" : ""
                                    }}><FontAwesomeIcon icon={faUsers} /></i>
                                <span
                                    style={{
                                        color: router.pathname.includes("/customers") ? "white" : ""
                                    }}>Customers</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${styles.row}`}>
                        <Link  
                            className={`${styles.row}`}
                            style={{
                                borderLeft: router.pathname.includes("/orders") ? "4px solid white" : "4px solid transparent"
                            }}
                            href={'/'}>
                            <div className={`${styles.row} ${styles.menuItem} `}>
                                <i
                                    style={{
                                        color: router.pathname.includes("/orders") ? "white" : ""
                                    }}><FontAwesomeIcon icon={faMoneyBillTransfer} /></i>
                                <span
                                    style={{
                                        color: router.pathname.includes("/orders") ? "white" : ""
                                    }}>Orders</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${styles.row}`}>
                        <Link  
                            className={`${styles.row}`}
                            style={{
                                borderLeft: router.pathname.includes("/fullfilment") ? "4px solid white" : "4px solid transparent"
                            }}
                            href={'/'}>
                            <div className={`${styles.row} ${styles.menuItem} `}>
                                <i
                                    style={{
                                        color: router.pathname.includes("/fullfilment") ? "white" : ""
                                    }}><FontAwesomeIcon icon={faTruckFast} /></i>
                                <span
                                    style={{
                                        color: router.pathname.includes("/fullfilment") ? "white" : ""
                                    }}>Fulfilment</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className={`${styles.col} `}>
                    <Underline />
                    <ul>
                        <li className={`${styles.menuSettingItem}`}>
                            <p>Bigly Store</p>
                        </li>
                        <li className={`${styles.menuSettingItem}`}>
                            <Link  
                                className={`${styles.row}`}
                                style={{
                                    borderLeft: router.pathname.includes("/fullfilment") ? "4px solid white" : "4px solid transparent"
                                }}
                                href={'/'}>
                                <div className={`${styles.row}`}>
                                    <i
                                        style={{
                                            color: router.pathname.includes("/fullfilment") ? "white" : ""
                                        }}><FontAwesomeIcon icon={faSliders} /></i>
                                    <span
                                        style={{
                                            color: router.pathname.includes("/fullfilment") ? "white" : ""
                                        }}>Settings</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;