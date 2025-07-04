import styles from './Education.module.css';
import diplomaImg from '../../assets/diploma.png';

export default function Education() {
    return (
        <div className={styles.education}>
            <h2 className={styles.title}>Образование</h2>

            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <p><strong>ВУЗ:</strong> Белгородский государственный технологический университет им. В.Г. Шухова</p>
                    <p><strong>Факультет:</strong> Институт информационных технологий и управляющих систем</p>
                    <p><strong>Направление:</strong> Программная инженерия</p>
                    <p><strong>Годы обучения:</strong> 2021 — 2025</p>
                    <p><strong>Квалификация:</strong> Бакалавр</p>
                </div>

                <div className={styles.imageBlock}>
                    <img src={diplomaImg} alt="Диплом" className={styles.diploma} />
                </div>
            </div>
        </div>
    );
}
