import Link from 'next/link';
import styles from './page.module.css'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutHeader}>About</h1>
            <div className={styles.NavButtonsContainer}>
                <Link href='/'>
                    <button className={styles.NavButton}>Back</button>
                </Link>
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.descriptionContainer}>
                    <p className={styles.description}>Welcome to our hub of robotic innovation, 
                    where the boundaries of technology and imagination converge. Here, 
                    we delve into the fascinating world of robots, exploring their intricate designs, 
                    groundbreaking functionalities, and the endless possibilities they offer.</p>
                    <p className={styles.description}>
                    From industrial automation to personal assistants, 
                    our curated content provides insights into the latest advancements, trends, 
                    and applications of robotics. Join us as we celebrate the synergy between human ingenuity and machine precision, 
                    and discover how robots are reshaping our lives and industries for a smarter, more efficient future.</p>
                    <p className={styles.description}>Whether you&apos;re a tech enthusiast or a curious newcomer, there&apos;s something here for everyone!</p>
                </div>
            </div>
        </div>
    )
}

export default About