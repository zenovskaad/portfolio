import Project from './Project/Project.tsx';
import styles from './Projects.module.css';
import portfolioImg1 from '../../assets/projects/portfolio/img1.png';
import portfolioImg2 from '../../assets/projects/portfolio/img2.png';
import portfolioImg3 from '../../assets/projects/portfolio/img3.png';
import todoImg from '../../assets/projects/todo/img.png';
import aisImg1 from '../../assets/projects/ais/img1.jpg';
import aisImg2 from '../../assets/projects/ais/img2.jpg';
import aisImg3 from '../../assets/projects/ais/img3.jpg';
import aisImg4 from '../../assets/projects/ais/img4.jpg';
import aisImg5 from '../../assets/projects/ais/img5.jpg';
import vkrImg1 from '../../assets/projects/vkr/img1.png';
import vkrImg2 from '../../assets/projects/vkr/img2.png';
import vkrImg3 from '../../assets/projects/vkr/img3.png';
import vkrImg4 from '../../assets/projects/vkr/img4.png';

const projectsList = [
    {
        title: 'Страницы аналитики в АИС',
        description: 'Веб-страницы с отображением графиков, диаграмм по данным полученным из API-запросов.',
        stack: ['React', 'TypeScript', 'Redux', 'CSS Modules', 'JSX', 'API'],
        // codeLink: 'https://example.com',
        // pageLink: 'https://example.com',
        imagesList: [aisImg1, aisImg2, aisImg3, aisImg4, aisImg5],
    },
    {
        title: 'Сайт портфолио',
        description: 'Личный сайт-портфолио с анимацией, навигацией, разделами навыков, опыта и проектов.',
        stack: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'JSX'],
        codeLink: 'https://github.com/zenovskaad/portfolio',
        pageLink: 'https://zenovskaad.github.io/portfolio/',
        imagesList: [portfolioImg1, portfolioImg2, portfolioImg3],
    },
    {
        title: 'Веб-приложение со списком задач',
        description: 'Веб-приложение с возможностью добавления и удаления задач, фильтрации списка по статусам.',
        stack: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'JSX', 'Jest', 'Firebase'],
        codeLink: 'https://github.com/zenovskaad/todo-app',
        pageLink: 'https://zenovskaad.github.io/todo-app/',
        imagesList: [todoImg],
    },
    {
        title: 'Система управления ЛПУ',
        description: 'Автоматизированная система управления основными бизнес-процессами санатория: размещение и оказание мед.услуг',
        stack: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'JSX', 'API', 'Swagger'],
        codeLink: 'https://github.com/zenovskaad/vkr-frontend',
        // pageLink: 'https://zenovskaad.github.io/vkr-frontend/',
        imagesList: [vkrImg1, vkrImg2, vkrImg3, vkrImg4],
    },
];

export default function Projects() {
    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.title}>Проекты</h2>

            <div className={styles.grid}>
                {projectsList.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
