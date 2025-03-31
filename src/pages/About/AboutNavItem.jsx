import styles from './About.module.scss'

const AboutNavItem = ({ id, activeSection, name }) => {
    return (
        <li className={styles["navigation-item"]}>
            <a href={`#${id}`} className={`${styles["navigation-link"]} ${activeSection === id ? 'active' : ''}`}>{name}</a>
        </li>
    );
}
 
export default AboutNavItem