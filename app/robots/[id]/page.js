import styles from './page.module.css'
import MapComponent from '/components/MapComponent'
import Image from 'next/image'
import Link from 'next/link'

// This generates static pages for each robot
export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await res.json();
    
    return robots.map((robot) => ({
        id: robot.id.toString(),
    }));
}

// page component
export default async function RobotPage({ params }) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const robot = await res.json();

    return (
        <div className={styles.robotPage}>
            <div className={styles.NavButtonsContainer}>
                <Link href='/robots'>
                    <button className={styles.NavButton}>Back</button>
                </Link>
            </div>
            <div className={styles.robotImgContainer}>
                <Image className={styles.robotImg} src={`https://robohash.org/${robot.name}.png`} alt='robot_image' width={200} height={200}/>
            </div>
            <div className={styles.robotContainer}>
                <div className={styles.robot}>
                    <div className={styles.robotInfo}>
                        <h1>{robot.name}</h1>
                        <div className={styles.robotContactInfo}>
                            <p><Image className={styles.icons} src='/icons/email.png' alt='email_icon' width={20} height={20}/> {robot.email}</p>
                            <p><Image className={styles.icons} src='/icons/phone.png' alt='phone_icon' width={20} height={20}/> {robot.phone}</p>
                            <p><Image className={styles.icons} src='/icons/www.png' alt='www_icon' width={20} height={20}/> {robot.website}</p>
                        </div>
                    </div>
                    <div className={styles.mapContainer}>
                        <MapComponent lat={robot.address.geo.lat} lng={robot.address.geo.lng} name={robot.name} />
                    </div>
                </div>
            </div>
        </div>
    );
}