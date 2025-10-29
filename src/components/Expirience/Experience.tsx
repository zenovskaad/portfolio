import styles from './experience.module.css';
import Job from './Job/Job.tsx';

export default function Experience() {
    return (
        <div className={styles.experience}>
            <h2 className={styles.title}>Опыт работы</h2>

            <Job
                position="Техник-программист"
                company='ООО "КБ КВАНТА", Белгород'
                period="с июля 2023 по настоящее время"
                tasks={[
                    // "Портирование кода: с ASP.NET на PHP, редактирование HTML/CSS, SQL-запросов (MSSQL → PostgreSQL), устранение багов, оптимизация кода.",
                    "Сайт стажировок: правки компонентов React, стилизация, адаптивная верстка, исправление ошибок, Typescript.",
                    "АИС подбора персонала: создание компонентов, работа с Redux, API, хуками, отображение и обработка данных.",
                ]}
                stack="React, JavaScript, TypeScript, Redux, REST API, HTML, CSS, SQL"
            />

        </div>
    );
}
