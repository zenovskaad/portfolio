import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/Header.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    return (
        <>
            <Header/>

            <div className="container">
                <section id="about">
                    <AboutMe/>
                </section>

                <section id="projects">
                    <Projects/>
                </section>

                <section id="skills">
                    <Skills/>
                </section>

                <section id="contact">
                    <Contacts/>
                </section>
            </div>

            <Footer/>
        </>
    )
}

export default App
