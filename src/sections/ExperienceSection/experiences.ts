import { CompanyEntry } from "../../components/ExperienceBox/types"

export const EXPERIENCES: CompanyEntry[] = [
    {
        company: "JIT Team",
        beginsAt: "09/2019",
        position: "@Fronted developer",
        description:
            "My main responsibility was designing, fixing bugs, e2e/unit testing, doing proof of concept, developing and maintaing the UI features using newest React standards and workflow for remote reading and managing heat control devices. I was delivering the customer new solutions and ideas to improve the user experience and quality of the product. Additionally I was introducing new programmers into the frontend project, sharing the technical konwledge and menthoring less-experienced.",
        technologies: [
            "react",
            "typescript",
            "javascript",
            "redux",
            "socket-io",
            "jest",
            "azure-devops",
            "figma",
        ],
    },
    {
        company: "OKE Software",
        beginsAt: "07/2018",
        endsAt: "08/2019",
        partTimeExp: true,
        position: "@Fullstack developer",
        description:
            "My activity was to build web application for Word document processing created in ASP.NET Web API + Angular 6 using Word document processing with OpenXM. Additionally I was maintaing Microsoft Word addon made in VBA with constant client contact as a support. The application was designed, deployed and supported in Azure Cloud Services.",
        technologies: ["csharp", "azure", "microsoft-sql", "angular", "word-addons"],
    },
    {
        company: "OKE Software",
        beginsAt: "07/2017",
        endsAt: "09/2017",
        position: "@Fullstack developer",
        description:
            "I took part in creating web application for seaching employees, the application was built using ASP.NET MVC + Razor. Additionally I had a chance creating the proof of concept of the slack application which was gathering the user messages.",
        technologies: ["csharp", "mysql", "microsoft-sql", "slack"],
    },
]
