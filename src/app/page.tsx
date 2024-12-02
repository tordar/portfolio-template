import AboutMe from '../components/AboutMe'
import SkillsSection from "@/src/components/Skills";
import Projects from "@/src/components/Projects";

export default function Home() {
    return (
        <>
            <AboutMe/>
            <Projects />
            <SkillsSection/>
        </>
    )
}