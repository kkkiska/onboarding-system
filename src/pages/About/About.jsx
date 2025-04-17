import { useEffect, useState } from "react";
import aboutImg from "../../assets/images/about.png";
import styles from "./About.module.scss";
import Plate from "../../components/UI/Plate/Plate";
import AboutNavItem from "./AboutNavItem";
const About = () => {
  const [activeSection, setActiveSection] = useState("history");
  const description =
    "Республиканское унитарное предприятие «Национальный центр обмена трафиком» – одна из лидирующих динамично развивающихся организаций, созданная в целях развития в Республике Беларусь современной инфраструктуры сети передачи данных на основе внедрения новых информационно-коммуникационных технологий, привлечения в эту сферу отечественных и иностранных инвестиций, повышения качества и снижения стоимости оказываемых услуг передачи данных.";
  const sections = [
    {
      name: "История",
      id: "history",
    },
    {
      name: "Миссия",
      id: "mission",
    },
    {
      name: "Наши ценности",
      id: "values",
    },
    {
      name: "Наши достижения",
      id: "achivements",
    },
  ];

  return (
    <>
      <Plate className={styles["about"]}>
        <div className={styles["about__container"]}>
          <div className={styles["about__title"]}>
            Национальный центр обмена трафиком
          </div>
        </div>
        <img className={styles["about__banner"]} src={aboutImg} alt="" />
        <div className={styles["about__content"]}>
          <nav className={styles["navigation"]}>
            <ul className={styles["navigation-list"]}>
              {sections.map(({ name, id }) => (
                <AboutNavItem
                  key={id}
                  name={name}
                  id={id}
                  activeSection={activeSection}
                />
              ))}
            </ul>
          </nav>
          <div className={styles["about__container"]}>
            <p className={styles["about__text"]}>{description}</p>
            {sections.map(({ name, id }) => (
              <>
                <br />
                <section id={id} className={styles["about__section"]}>
                  <div className={styles["about__text-title"]}>{name}</div>
                  <p className={styles["about__text"]}>{description}</p>
                </section>
              </>
            ))}
          </div>
        </div>
      </Plate>
    </>
  );
};

export default About;
