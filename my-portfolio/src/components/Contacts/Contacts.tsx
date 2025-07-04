import React, { useState } from 'react';
import styles from './Contacts.module.css';

export default function Contacts() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Тут можно добавить логику отправки через EmailJS или другую систему
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={styles.contact}>
            <h2 className={styles.title}>Контакты</h2>

            <div className={styles.info}>
                <p>Email: <a href="mailto:dafasun97531@gmail.com">dafasun97531@gmail.com</a></p>
                <p>Телефон: <a href="tel:+79502588011">+7 950 258 80 11</a></p>
                <p>
                    Соцсети:
                    <a href="https://t.me/dafasun" target="_blank" rel="noopener noreferrer"> Telegram</a> |
                    <a href="https://github.com/dafasun" target="_blank" rel="noopener noreferrer"> GitHub</a> |
                    <a href="https://linkedin.com/in/dafasun" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                    <a href="https://vk.com/dafasun" target="_blank" rel="noopener noreferrer"> Вконтакте</a>
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <textarea
                    name="message"
                    placeholder="Сообщение"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>Отправить</button>
                {submitted && <p className={styles.thanks}>Спасибо! Ваше сообщение отправлено.</p>}
            </form>
        </div>
    );
}
