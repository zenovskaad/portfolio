import React from 'react';
import styles from './Job.module.css';
import { Briefcase, Calendar, Code2 } from 'lucide-react';

type JobProps = {
    position: string;
    company: string;
    period: string;
    tasks: string[];
    stack: string;
};

const Job: React.FC<JobProps> = ({ position, company, period, tasks, stack }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.titleBlock}>
                    <Briefcase className={styles.icon} />
                    <h3 className={styles.position}>{position}</h3>
                </div>
                <div className={styles.period}>
                    <Calendar size={16} />
                    <span>{period}</span>
                </div>
            </div>

            <p className={styles.company}>{company}</p>

            <ul className={styles.tasks}>
                {tasks.map((task, i) => (
                    <li key={i}>
                        <span className={styles.bullet}>✔</span> {task}
                    </li>
                ))}
            </ul>

            <div className={styles.stack}>
                <Code2 className={styles.icon} />
                <span><strong>Стек:</strong> {stack}</span>
            </div>
        </div>
    );
};

export default Job;
