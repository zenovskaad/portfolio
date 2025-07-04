import React from 'react';
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: 'Портфолио на React',
        description: 'Одностраничное приложение для демонстрации моих навыков и проектов.',
        link: 'https://github.com/username/portfolio',
    },
    {
        id: 2,
        title: 'Todo App',
        description: 'Простое приложение для управления задачами с использованием React и LocalStorage.',
        link: 'https://github.com/username/todo-app',
    },
    {
        id: 3,
        title: 'Магазин на Vue',
        description: 'Интернет-магазин с корзиной и фильтрацией товаров.',
        link: 'https://github.com/username/vue-shop',
    },
];

export default function Projects() {
    return (
        <div className={styles.projects}>
            <h2 className={styles.title}>Проекты</h2>
            <div className={styles.list}>
                {projects.map(({ id, title, description, link }) => (
                    <div key={id} className={styles.card}>
                        <h3 className={styles.projectTitle}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Смотреть код
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
