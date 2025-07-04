import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © {new Date().getFullYear()}. DafaSun. Зеновская Дарья.
            </p>
            <p>
                <a href="https://github.com/dafasun" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub
                </a>{' | '}
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}
