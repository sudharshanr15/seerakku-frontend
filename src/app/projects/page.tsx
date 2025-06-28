import Hero from "@/features/projects/components/Hero";
import { Metadata } from "next";
import ProjectsList from "@/features/projects/components/Projects";

export const metadata: Metadata = {
  title: "About Us",
};

function Projects(){
    return (
        <main>
            <Hero />
            <ProjectsList />
        </main>
    )
}

export default Projects;