import './App.css'
import Header from "./components/Header/Header.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Education from "./components/Education/Education.tsx";
import Experience from "./components/Expirience/Experience.tsx";

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

                <section id="education">
                    <Education />
                </section>

                <section id="experience">
                    <Experience />
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
