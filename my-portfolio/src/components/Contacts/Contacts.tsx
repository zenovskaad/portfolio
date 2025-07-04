import React from 'react';
import styles from './Contacts.module.css';
import { FaTelegramPlane, FaEnvelope, FaPhone, FaGithub, FaVk } from 'react-icons/fa';

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <h2 className={styles.title}>Контакты</h2>
            <div className={styles.contactGrid}>
                <a href="https://t.me/DafaSun" target="_blank" className={styles.contactItem} rel="noreferrer">
                    <FaTelegramPlane className={`${styles.icon} ${styles.telegram}`} />
                    <span>@DafaSun</span>
                </a>

                <a href="mailto:dafasun97531@gmail.com" className={styles.contactItem}>
                    <FaEnvelope className={`${styles.icon} ${styles.email}`} />
                    <span>dafasun97531@gmail.com</span>
                </a>

                <a href="https://vk.com/dafasun" target="_blank" className={styles.contactItem} rel="noreferrer">
                    <FaVk className={`${styles.icon} ${styles.vk}`} />
                    <span>VK</span>
                </a>
            </div>

            <div className={styles.contactGrid}>
                <a href="https://github.com/DafaSun" target="_blank" className={styles.contactItem} rel="noreferrer">
                    <FaGithub className={`${styles.icon} ${styles.github}`} />
                    <span>GitHub</span>
                </a>

                <div className={styles.contactItem}>
                    <FaPhone className={`${styles.icon} ${styles.phone}`} />
                    <span>+7 (950) 258-80-11</span>
                </div>
            </div>
        </div>
    );
}