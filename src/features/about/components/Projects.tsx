// pages/projects.js
import Image, { StaticImageData } from "next/image";
import ShadowContainer from "@/components/ShadowContainer";
import { additional, corporate, plantation } from "../assets";

const projects: {
  title: string,
  image: StaticImageData,
  desc: {
    title: string,
    desc: string
  }[]
}[] = [
  {
    title: "Tree Plantation Projects",
    image: plantation,
    desc: [
      {
        title: "Urban Afforestation Initiatives",
        desc: "Large-scale afforestation in urban spaces to promote green cover and improve air quality."
      },
      {
        title: "Agroforestry Programs",
        desc: "Enhancing green corridors and providing sustainable agricultural solutions for farmers."
      },
      {
        title: "Palm Tree Plantation",
        desc: "Focusing on planting palm trees in various regions as they are known for their resilience and long-lasting ecological benefits. Palm trees also play a crucial role in stabilizing ecosystems, particularly in coastal areas."
      },
      {
        title: "Special Day Tree Plantations",
        desc: "Partnering with organizations for meaningful tree planting drives to celebrate corporate milestones and special occasions."
      }
    ]
  },
  {
    title: "Corporate Volunteering Activities",
    image: corporate,
    desc: [
      {
        title: "Tree Plantation Volunteering",
        desc: "Corporate employees join hands to plant trees, contributing to sustainability efforts while fostering team-building."
      },
      {
        title: "Seedball Making",
        desc: "Engaging volunteers in creating seed balls to support reforestation projects, a hands-on activity that creates awareness and leaves a lasting impact."
      },
      {
        title: "Waste Cleanup Drives",
        desc: "Focus on water bodies and urban areas to reduce pollution, promote recycling, and enhance public awareness of environmental conservation."
      },
      {
        title: "Environment Education Programs",
        desc: "Workshops and programs for corporates to increase awareness about sustainable living, waste management, and energy conservation."
      }
    ]
  },
  {
    title: "Additional Projects",
    image: additional,
    desc: [
      {
        title: "Carbon-Neutrality Projects",
        desc: "Helping individuals and businesses calculate their carbon footprints and providing opportunities to offset them through tree planting initiatives."
      },
      {
        title: "Pond and Waterbody Restoration",
        desc: "Reviving ponds and lakes to enhance biodiversity and improve community access to clean water."
      },
      {
        title: "Wildlife Conservation",
        desc: "Our wildlife conservation efforts aim to preserve local biodiversity, with a special focus on endangered species. These initiatives involve habitat restoration, conservation awareness programs, and the protection of critical wildlife corridors.",
      },
      {
        title: "Human-Elephant Conflict Mitigation",
        desc: "Seerakku is actively engaged in projects to mitigate human-elephant conflict in areas where human habitation overlaps with elephant migration routes. We work closely with local communities to implement solutions like creating safe passageways for elephants and promoting sustainable agricultural practices to reduce conflict."
      }
    ]
  }
]

export default function Projects() {
  const theme_colors = ["primary_green", "primary", "secondary_light_green"]

  return (
    <section className="layout-section-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col border h-full">
            <div className="w-full">
              <Image src={project.image} alt={project.title} className="w-full" />
            </div>
            <div className="flex-grow">
              <ShadowContainer shadowTo="left" theme={theme_colors[index % theme_colors.length]}>
                <div className="p-7">
                  <h3 className="heading-3">
                    {project.title}
                  </h3>
                  <div>
                    {project.desc.map((project_desc, index) => (
                      <p key={index} className="mb-3">
                        <span className="font-bold">{project_desc.title}: </span>{project_desc.desc}
                      </p>
                    ))}
                  </div>
                </div>
              </ShadowContainer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
