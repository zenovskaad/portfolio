import React from "react";
import styles from "./Skills.module.css";
import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaPython,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiPostgresql, SiGitlab, SiApollographql, SiPostman, SiFigma, SiJira} from "react-icons/si";
import { MdApi } from "react-icons/md";

const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#333" /> },
    { name: "GitLab", icon: <SiGitlab color="#FC6D26" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    // { name: "REST API", icon: <MdApi color="#4CAF50" /> },
    { name: "API", icon: <SiApollographql color="#311C87" /> },
    { name: "Redux", icon: <SiRedux color="#764abc" /> },
    { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
    { name: "Jira", icon: <SiJira color="#0052CC" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
];

export default function Skills() {
    return (
        <div className={styles.skills}>
            <h2 className={styles.title}>Навыки</h2>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{skill.icon}</div>
                        <div className={styles.label}>{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
