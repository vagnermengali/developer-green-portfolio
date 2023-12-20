import { PiFigmaLogoThin } from "react-icons/pi";
import {
    TbBrandNextjs,
    TbBrandNodejs,
    TbBrandCss3,
    TbBrandHtml5,
    TbBrandReact,
    TbBrandFigma,
    TbBrandDjango,
    TbBrandDocker,
    TbBrandMongodb,
    TbBrandPrisma,
    TbBrandPython,
    TbBrandSass,
    TbBrandTailwind,
    TbBrandTypescript,
    TbBrandJavascript,
    TbBrandGit
} from "react-icons/tb";

/* faltou TbJewishStar, nestjs, express, SQlite, PostgreSQL */

export const aboutData = [
    {
        id: "about",
        title: "Sobre mim",
        info: [
            {
                id: "about1",
                title: "",
                stage: "Ingressei na carreira de TI por interesse em jogos, comecei a modificar códigos para melhorar jogos e, gradualmente, estudei por conta própria. Trabalhei meio período na Fixtoxs como desenvolvedor front-end, evoluindo para full stack. Após um curso em tempo integral, fui monitor na Kenzie Academy e, agora, sou desenvolvedor front-end na Wicomm, além de fazer projetos freelance como full stack.",
                key: "about1",
            }
        ],
    },
    {
        id: "skills",
        title: "Habilidades",
        info: [
            {
                id: "web-development",
                title: "Desenvolvimento Web  ",
                icons: [
                    <TbBrandHtml5 key="html5" />,
                    <TbBrandCss3 key="css3" />,
                    <TbBrandReact key="react" />,
                    <TbBrandNextjs key="next" />,
                    <TbBrandDjango key="django" />,
                    <TbBrandDocker key="docker" />,
                    <TbBrandNodejs key="node" />,
                    <TbBrandMongodb key="mongo" />,
                    <TbBrandPrisma key="prisma" />,
                    <TbBrandPython key="python" />,
                    <TbBrandSass key="sass" />,
                    <TbBrandTailwind key="tailwind" />,
                    <TbBrandTypescript key="typescript" />,
                    <TbBrandJavascript key="javascript" />,
                    <TbBrandGit key="git" />,
                ],
            },
            {
                id: "ui-ux-design",
                title: "UI/UX Design ",
                icons: [
                    <TbBrandFigma key="figma" />,
                ],
            },
        ],
    },
    {
        id: "education",
        title: "Educação",
        info: [
            {
                id: "education1",
                title: "Desenvolvimento web full stack ",
                stage: "mar de 2023",
                key: "education1",
            },
            {
                id: "education2",
                title: "Back end avançado ",
                stage: "fev de 2023",
                key: "education2",
            },
            {
                id: "education3",
                title: "DevOps & Agile culture ",
                stage: "fev de 2023",
                key: "education3",
            },
            {
                id: "education4",
                title: "Introdução ao back end ",
                stage: "jan de 2023",
                key: "education4",
            },
            {
                id: "education5",
                title: "Programação web intermediária ",
                stage: "out de 2022",
                key: "education5",
            },
            {
                id: "education6",
                title: "Desenvolvimento web front end ",
                stage: "set de 2022",
                key: "education6",
            },
            {
                id: "education7",
                title: "Introdução ao back end ",
                stage: "jun de 2022",
                key: "education7",
            },
        ],
    },
    {
        id: "experience",
        title: "Experiência",
        info: [
            {
                id: "experience1",
                title: "Wicomm | Desenvolvedor front end ",
                stage: "abr 2023  o momento",
                key: "experience1",
            },
            {
                id: "experience2",
                title: "Kenzie Academy Brasil | Monitor ",
                stage: "mai 2022  nov 2022",
                key: "experience2",
            },
            {
                id: "experience3",
                title: "Fitoxs | Desenvolvedor full stack ",
                stage: "set 2020  fev 2020",
                key: "experience3",
            },
            {
                id: "experience4",
                title: "Fitoxs | Desenvolvedor front end ",
                stage: "fev 2020  set 2020",
                key: "experience4",
            },
        ],
    },
    /*     {
            id: "formation",
            title: "Formação",
            info: [
                {
                    id: "formation1",
                    title: "Cursando Análise e Desenvolvimento de Sistemas  UNICID",
                    stage: "01/2023  12/2024",
                    key: "formation1",
                },
                {
                    id: "formation2",
                    title: "Senac São Miguel Paulista | WINDOWS E OFFICE 2016",
                    stage: "06/2019  12/2019",
                    key: "formation2",
                },
            ],
        }, */
];
