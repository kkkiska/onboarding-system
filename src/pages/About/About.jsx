import { useEffect, useState } from "react"
import Plate from "../../UI/Plate/Plate"
import aboutImg from "../../assets/images/about.png"
import styles from './About.module.scss'

const About = () => {
    const [activeSection, setActiveSection] = useState('history');

    return(
        <>
            <div className="page-title">О компании</div>
            <Plate className="about">
                <div className="about__container">
                    <div className="about__title">Национальный центр обмена трафиком</div>
                </div>
                <img className="about__banner" src={aboutImg} alt="" />
                <div className="about__content">
                    <nav className="navigation">
                        <ul className="navigation-list">
                            <li className="navigation-item">
                                <a href="#history" className={`navigation-link ${activeSection === 'history' ? 'active' : ''}`}>История</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#mission" className={`navigation-link ${activeSection === 'mission' ? 'active' : ''}`}>Миссия</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#values" className={`navigation-link ${activeSection === 'values' ? 'active' : ''}`}>Наши ценности</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#achivements" className={`navigation-link ${activeSection === 'achivements' ? 'active' : ''}`}>Наши достижения</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="about__container">
                        <p className="about__text">Республиканское унитарное предприятие «Национальный центр обмена трафиком» – одна из лидирующих динамично развивающихся организаций, созданная в целях развития в Республике Беларусь современной инфраструктуры сети передачи данных на основе внедрения новых информационно-коммуникационных технологий, привлечения в эту сферу отечественных и иностранных инвестиций, повышения качества и снижения стоимости оказываемых услуг передачи данных.</p>
                        <br />

                        <section id="history" className="about__section">
                            <div className="about__text-title">История</div>
                            <p className="about__text">Республиканское унитарное предприятие «Национальный центр обмена трафиком» – одна из лидирующих динамично развивающихся организаций, созданная в целях развития в Республике Беларусь современной инфраструктуры сети передачи данных на основе внедрения новых информационно-коммуникационных технологий, привлечения в эту сферу отечественных и иностранных инвестиций, повышения качества и снижения стоимости оказываемых услуг передачи данных.</p>
                        </section>

                        <br />

                        <section id="mission" className="about__section">
                            <div className="about__text-title">Миссия</div>
                            <p className="about__text">Республиканское унитарное предприятие «Национальный центр обмена трафиком» – одна из лидирующих динамично развивающихся организаций, созданная в целях развития в Республике Беларусь современной инфраструктуры сети передачи данных на основе внедрения новых информационно-коммуникационных технологий, привлечения в эту сферу отечественных и иностранных инвестиций, повышения качества и снижения стоимости оказываемых услуг передачи данных.</p>
                        </section>

                        <br />

                        <section id="values" className="about__section">
                            <div className="about__text-title">Наши ценности</div>
                            <p className="about__text">Республиканское унитарное предприятие «Национальный центр обмена трафиком» – одна из лидирующих динамично развивающихся организаций, созданная в целях развития в Республике Беларусь современной инфраструктуры сети передачи данных на основе внедрения новых информационно-коммуникационных технологий, привлечения в эту сферу отечественных и иностранных инвестиций, повышения качества и снижения стоимости оказываемых услуг передачи данных.</p>
                        </section>

                        <br />
                        <section id="achivements" className="about__section">
                            <div className="about__text-title">Наши достижения</div>
                            <p className="about__text">Республиканское унитарное предприятие «Национальный центр обмена трафиком» – одна из лидирующих динамично развивающихся организаций, созданная в целях развития в Республике Беларусь современной инфраструктуры сети передачи данных на основе внедрения новых информационно-коммуникационных технологий, привлечения в эту сферу отечественных и иностранных инвестиций, повышения качества и снижения стоимости оказываемых услуг передачи данных.</p>
                        </section>
                    </div>
                </div>
            </Plate>
        </>
    )
}

export default About