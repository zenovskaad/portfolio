import React from 'react';
import styles from './Header.module.css'

export default function Header() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <header className={styles['header']}>
            <nav className={styles['nav']}>
                <button className={styles['button']} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    О себе
                </button>
                <button className={styles['button']} onClick={() => scrollToSection('projects')}>Проекты</button>
                <button className={styles['button']} onClick={() => scrollToSection('skills')}>Навыки</button>
                <button className={styles['button']} onClick={() => scrollToSection('contact')}>Контакты</button>
            </nav>
        </header>
    );
}

