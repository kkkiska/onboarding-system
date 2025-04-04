import DocItem from "../../components/Documents/DocItem"
import Plate from "../../components/UI/Plate/Plate"
import styles from "./Documents.module.scss"

const Documents = () => {
    return (
        <Plate className={styles["documents"]}>
            <DocItem />
            <DocItem isLink={true}/>
        </Plate>
    )
}

export default Documents