import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'

const Robots = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const robots = await res.json();
    
    return (
        <div className={styles.robotsBackground}>
            <h1 className={styles.robotHeader}>Robots</h1>
            <div className={styles.NavButtonContainer}>
                <Link href='/'>
                    <button className={styles.NavButton}>Home</button>
                </Link>
            </div>
            <div className={styles.robotListContainer}>
                <div className={styles.robotList}>
                    {
                        robots.map(robot => (
                            <div key={robot.id} className={styles.robotItem}>
                                <div className={styles.robotDetail}>
                                    <Image className={styles.robotImage} src={`https://robohash.org/${robot.name}.png`} alt='robot_image' width={100} height={100}/>
                                    <Link className={styles.robotName} href={`robots/${robot.id}`}>
                                        {robot.name}
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Robots;