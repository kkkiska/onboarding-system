import styles from "./HomeMenu.module.scss"
import HomeMenuCard from "./HomeMenuCard"
import { cards } from "../../../mocks/mock-data"

const HomeMenu = () => {
 return (
    <nav className={styles["navigation"]}>
        
        {cards.map(({ title, subtitle, img, path }, key) =>  (
            <HomeMenuCard 
                key={key}
                title={title}
                subtitle={subtitle}
                img={img}
                path={path}
            />
        ))}
    </nav>
 )
}

export default HomeMenu