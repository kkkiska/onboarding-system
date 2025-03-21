import styles from "./HomeMenu.module.scss"
import HomeMenuCard from "./HomeMenuCard"

const HomeMenu = ({menuCards}) => {
    console.log(menuCards)
 return (
    <nav className={styles["navigation"]}>
        
        {menuCards.map(card =>  (
            <HomeMenuCard 
                title={card.title}
                subtitle={card.subtitle}
                img={card.img}
                path={card.path}
            />
        ))}
    </nav>
 )
}

export default HomeMenu