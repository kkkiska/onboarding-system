import DocItem from "../../components/Documents/DocItem"
import Plate from "../../components/UI/Plate/Plate"
import { documentsData } from "../../mocks/mock-data"
import styles from "./Documents.module.scss"

const Documents = () => {
    
    return (
        <Plate className={styles["documents"]}>
            {documentsData.map(document => (
                <DocItem 
                key={document.id}
                document={document}
                />
            ))}
        </Plate>
    )
}

export default Documents