import styles from './Header.module.css';

export default function Header() {
    const scrollToSection = (id: string, offset = 80) => {
        const section = document.getElementById(id);
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <header className={styles['header']}>
            <nav className={styles['nav']}>
                <button
                    className={styles['button']}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    О себе
                </button>
                <button className={styles['button']} onClick={() => scrollToSection('projects')}>
                    Проекты
                </button>
                <button className={styles['button']} onClick={() => scrollToSection('skills')}>
                    Навыки
                </button>
                <button className={styles['button']} onClick={() => scrollToSection('education')}>
                    Образование
                </button>
                <button className={styles['button']} onClick={() => scrollToSection('experience')}>
                    Опыт работы
                </button>
                <button className={styles['button']} onClick={() => scrollToSection('contact')}>
                    Контакты
                </button>
            </nav>
        </header>
    );
}
