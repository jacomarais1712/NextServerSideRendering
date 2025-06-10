import Link from 'next/link';
import styles from './page.module.css'

const Index = () => (
    <div className={styles.homeBackground}>
        <div className={styles.homeContent}>
            <h1 className={styles.magicianHeader}>SSR Magician</h1>
            <div className={styles.homeButtonsContainer}>
                <Link href='/about'>
                    <button className={styles.HomeButtons}>About</button>
                </Link>
                <Link href='/robots'>
                    <button className={styles.HomeButtons}>Robots</button>
                </Link>
            </div>
        </div>        
    </div>


);

export default Index