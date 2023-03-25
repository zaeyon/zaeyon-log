import React from 'react'; 
import Image from 'next/image'
import styles from './styles/Navbar.module.css';
import MenuIconPNG from "../../public/images/icons/hamburger.png";


interface props {

}

const Navbar: React.FC<props> = ({}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menuIconDiv}>
                <Image className={styles.menuIconImg}
                src={MenuIconPNG}
                alt={"menu icon"}
                />
            </div>
            <div className={styles.titleDiv}>
                ZAEYON LOG
            </div>
            <div className={styles.emptyDiv}>
            </div>
        </div>
    )
}

export default React.memo(Navbar);