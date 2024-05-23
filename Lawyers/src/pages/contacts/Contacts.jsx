import styles from "./Contacts.module.css"
import { Navbar } from "../../widgets/Navbar/Navbar"
import { Footer } from "../../widgets/Footer/Footer"
import { Breadcrumb } from "../../widgets/Breadcrumb/Breadcrumb"

export const Contacts = () => {
    return (
        <main className={styles.container}>
            <Navbar color="black" className={styles.header} />

            <section className={styles.bannerContainer}>
                <div className={styles.bannerBox}>
                    <Breadcrumb />

                    <h1>Контакты</h1>

                    <ul>
                        <li>
                            <p>УЗДЕНОВ РАМИЛЬ ХАСАНОВИЧ</p>
                        </li>

                        <hr />

                        <li>
                            <p>+7 918 711-77-17</p>
                            <p>advokat.ram@yandex.ru</p>
                            <p>Абдокова Бэла Хамсудовна</p>
                        </li>

                        <hr />

                        <li>
                            <p>+7 928 394-64-22</p>
                            <p>olesi13@mail.ru</p>
                        </li>

                        <li>
                            <div className={styles.adress}>
                                <img src="coolicon.svg" alt="gps" />
                                г. Черкесск, ул. Ворошилова 4
                            </div>
                        </li>
                    </ul>
                </div>
                <img src="contactBanner.png" alt="contactBanner" />
            </section>

            <Footer className={styles.footer} background = 'transparent' />
        </main>
    )
}