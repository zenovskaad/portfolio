import React from 'react';
import styles from './Skills.module.css';

const skills = [
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Git',
    'TypeScript',
    'Webpack',
    'REST API',
];

export default function Skills() {
    return (
        <div className={styles.skills}>
            <h2 className={styles.title}>Навыки</h2>
            <ul className={styles.list}>
                {skills.map((skill) => (
                    <li key={skill} className={styles.item}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
