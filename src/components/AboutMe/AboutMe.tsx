import styles from './AboutMe.module.css';
import myPhoto from '../../assets/myPhoto.jpg';
import { TiArrowDownThick } from "react-icons/ti";

export default function AboutMe() {
    return (
        <>
            <div className={styles.topBlock}>
                <div className={styles.photoBlock}>
                    <img src={myPhoto} alt="Мое фото" className={styles.photo} />
                </div>

                <div className={styles.infoBlock}>
                    <h3 className={styles.name}><strong>Зеновская Дарья Андреевна</strong></h3>
                    <ul className={styles.infoList}>
                        <li><strong>Дата рождения:</strong> 10 февраля 2003</li>
                        <li><strong>Пол:</strong> Женщина</li>
                        <li><strong>Город:</strong> Красноборск</li>
                        <li><strong>Телефон:</strong> +7 (950) 258-8011</li>
                        <li><strong>Email:</strong> dafasun97531@gmail.com</li>
                        <li><strong>Telegram:</strong><a href="https://t.me/DafaSun" target="_blank" rel="noreferrer"> @DafaSun</a></li>
                        <li><strong>GitHub:</strong> <a href="https://github.com/DafaSun" target="_blank" rel="noreferrer">github.com/DafaSun</a></li>
                    </ul>

                    <a
                        href="/portfolio/Zenovskaia_Daria_resume_React-developer.pdf"
                        download="Zenovskaia_Daria_resume_React-developer.pdf"
                        className={styles.downloadResumeBtn}
                        onClick={() => {
                            const btn = document.querySelector(`.${styles.downloadResumeBtn}`);
                            btn?.classList.add(styles.loading);

                            setTimeout(() => {
                                btn?.classList.remove(styles.loading);
                            }, 1500); // Убираем анимацию через 1.5 секунды
                        }}
                    >
                        <TiArrowDownThick />
                        <span>Загрузить резюме</span>
                    </a>
                </div>
            </div>

            <div className={styles.text}>
                <p>
                    Привет! Меня зовут Зеновская Дарья, я фронтенд-разработчик с опытом коммерческой работы и вниманием к деталям.
                    Люблю заниматься визуальной частью интерфейсов — версткой, стилями и адаптацией под макеты. Особенно комфортно чувствую себя при разработке с нуля: продумываю структуру, внешний вид и поведение компонентов.
                </p>

                <p>
                    У меня высшее образование по направлению «Программная инженерия» (Белгородский государственный технологический университет имени В.Г. Шухова, 2025),
                    выпускную квалификационную работу защитила на «отлично».
                </p>

                <p>
                    В работе уверенно использую React, JavaScript/TypeScript, CSS, API-запросы и Redux. Умею быстро вникать в чужой код, исправлять ошибки и предлагать улучшения. Постоянно развиваюсь и изучаю новые технологии, чтобы создавать качественные, удобные и адаптивные веб-приложения.
                </p>

                <p>
                    Ответственная, вежливая, комфортно работаю как самостоятельно, так и в команде. Открыта к конструктивной обратной связи и новым вызовам. Готова к обучению и новым знаниям.
                </p>
            </div>
        </>
    );
}
