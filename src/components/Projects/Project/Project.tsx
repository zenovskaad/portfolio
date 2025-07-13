import React, { useState } from 'react';
import styles from './Project.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react'
import defaultImg from '../../../assets/projects/projectDefaultImg.png';

type ProjectProps = {
    title: string;
    description: string;
    stack: string[];
    imagesList:  string[];
    codeLink?: string;
    pageLink?: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, stack, codeLink, pageLink, imagesList: imagesList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = imagesList?.length ? imagesList : [defaultImg];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={images[currentIndex]} alt={title} className={styles.image} />

                <button className={images.length<2? styles.hidden:  styles.arrowLeft} onClick={handlePrev}>
                    <ChevronLeft size={16} strokeWidth={2} className={styles.chevron} />
                </button>
                <button className={images.length<2? styles.hidden:  styles.arrowRight} onClick={handleNext}>
                    <ChevronRight size={16} strokeWidth={2} className={styles.chevron} />
                </button>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <ul className={styles.stack}>
                    {stack.map((tech, index) => (
                        <li key={index} className={styles.badge}>{tech}</li>
                    ))}
                </ul>

                <div className={styles.links}>
                {codeLink && (
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Код проекта
                    </a>
                )}

                {pageLink && (
                    <a href={pageLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Деплой проекта
                    </a>
                )}
                </div>
            </div>
        </div>
    );
};

export default Project;
