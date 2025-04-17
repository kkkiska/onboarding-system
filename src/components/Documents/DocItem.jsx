import styles from "../../pages/Documents/Documents.module.scss";
import docIcon from "../../assets/images/file.svg";
import planetIcon from "../../assets/images/planet.svg";

const DocItem = ({ document }) => {
  const icon = document.type === "link" ? planetIcon : docIcon;

  return (
    <div className={styles["doc"]}>
      <div className={styles["doc-plate"]}>
        <img
          src={icon}
          alt={document.type === "link" ? "Ссылка" : "Документ"}
        />
      </div>
      <div className={styles["doc-title"]}>
        {document.type === "link" ? (
          <a href={document.url}>{document.title}</a>
        ) : (
          document.title
        )}
      </div>
    </div>
  );
};

export default DocItem;
