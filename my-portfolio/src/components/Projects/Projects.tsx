import React from 'react';
import Project from './Project/Project.tsx';
import styles from './Projects.module.css';
import internshipsImg from '../../assets/projects/portfolio/portfolio.png';

export default function Projects() {
    return (
        <div className={styles.projectsSection}>
            <h2 className={styles.title}>Проекты</h2>

            <div className={styles.grid}>
                <Project
                    title="Платформа стажировок"
                    description="Веб-платформа для публикации и прохождения стажировок. Реализация личных кабинетов, адаптивная верстка, интеграция с API."
                    stack={['React', 'TypeScript', 'Redux', 'CSS Modules']}
                    link="https://example.com"
                    image={internshipsImg}
                />

                <Project
                    title="Сайт портфолио"
                    description="Личный сайт-портфолио с анимацией, навигацией, разделами навыков, опыта и проектов."
                    stack={['React', 'Vite', 'Tailwind CSS']}
                    image={internshipsImg}
                />

            </div>
        </div>
    );
}
