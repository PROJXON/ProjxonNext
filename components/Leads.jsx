"use client"

import {
    FaLinkedin,
    FaGlobe,
} from "react-icons/fa";
import LeadsGroup from "@/components/LeadsGroup";

export default function Leads() {
    const consultingLeads = [
        {
            image: "/assets/about/team/phelan.webp",
            name: "Mark Phelan",
            title: "Senior Consultant,",
            specialty: "E-Commerce Solutions",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/phelanmarkw",
                },
                {
                    icon: FaGlobe,
                    href: "https://www.thephelanfocus.com/",
                },
            ],
        },
        {
            image: "/assets/about/team/kathy.webp",
            name: "Kathy Seaton",
            title: "Senior Consultant,",
            specialty: "Non Profit Development",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/klseaton",
                },
                {
                    icon: FaGlobe,
                    href: "https://www.klseatonconsulting.com/",
                },
            ],
        },
        {
            image: "/assets/about/team/melissa.webp",
            name: "Melissa Eboli",
            title: "Senior Consultant,",
            specialty: "Health + Wellness Solutions",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/viamelissa",
                },
                {
                    icon: FaGlobe,
                    href: "https://www.viaskitchen.com/"
                },
            ],
        },
        {
            image: "/assets/about/team/donavon.webp",
            name: "Donavon Roberson",
            title: "Senior Consultant,",
            specialty: "Tech + Software Solutions",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/donavonroberson",
                },
                {
                    icon: FaGlobe,
                    href: "https://medium.com/@thejourneyofthedreamer",
                },
            ],
        }
    ];

    const teamLeads = [
        {
            image: "/assets/about/team/bast.webp",
            name: "Bast Herrera",
            title: "Team Lead,",
            specialty: "Program Development",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/vincentcherrera",
                },
            ],
        },
        {
            image: "/assets/about/team/dania.webp",
            name: "Dania Ali",
            title: "Team Lead,",
            specialty: "Operations + Strategy",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/syeda-dania-ali",
                },
            ],
        },
        {
            image: "/assets/about/team/megha.webp",
            name: "Megha Vinjamuru",
            title: "Team Lead,",
            specialty: "Project Management",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/meghanethra",
                },
            ],
        },
        {
            image: "/assets/about/team/alexandria.webp",
            name: "Alexandria Boreman",
            title: "Team Lead,",
            specialty: "Marketing + Creative",
            socials: [
                {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/alexandriaboreman",
                },
            ],
        },
    ];

    return (<>
        <LeadsGroup heading="Consulting Leads" leads={consultingLeads} />
        <LeadsGroup heading="Delivery Team Leads" leads={teamLeads} />
    </>)
}