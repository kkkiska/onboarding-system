import styles from "../../pages/Documents/Documents.module.scss"
import doc from "../../assets/images/file.svg"
import planet from "../../assets/images/planet.svg"

const DocItem = ({isLink}) => {
    return (
        <div className={styles["doc"]}>
            <div className={styles["doc-plate"]}>
                <img src={isLink ? planet : doc} alt="" />
            </div>
            <div className={styles["doc-title"]}>Должностная инструкция.docx</div>
        </div>
    );
}

export default DocItem