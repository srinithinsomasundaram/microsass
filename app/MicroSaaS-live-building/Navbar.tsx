import styles from './page.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    MicroSaaS <span className={styles.bold}>Movement</span>
                </div>
                <div className={styles.navLinks}>
                    <a href="#speaker">Speaker</a>
                    <a href="#outcomes">Outcomes</a>

                </div>
                <div className={styles.navCta}>
                    <a href="#register" className={styles.navButton}>Join Now</a>
                </div>
            </div>
        </nav>
    );
}
