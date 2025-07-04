import React from 'react';
import styles from './Project.module.css';

type ProjectProps = {
    title: string;
    description: string;
    stack: string[];
    link?: string;
    image?: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, stack, link, image }) => {
    return (
        <div className={styles.card}>
            {image && <img src={image} alt={title} className={styles.image} />}

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <ul className={styles.stack}>
                    {stack.map((tech, index) => (
                        <li key={index} className={styles.badge}>{tech}</li>
                    ))}
                </ul>

                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Смотреть проект →
                    </a>
                )}
            </div>
        </div>
    );
};

export default Project;
