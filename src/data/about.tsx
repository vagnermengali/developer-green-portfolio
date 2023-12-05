import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaSass,
    FaReact,
    FaFigma,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from "react-icons/si";

export const aboutData = [
    {
        title: "Habilidades",
        info: [
            {
                title: "Desenvolvimento Web",
                icons: [
                    <FaHtml5 key="html5" />,
                    <FaCss3 key="css3" />,
                    <FaSass key="sass" />,
                    <FaJs key="js" />,
                    <FaReact key="react" />,
                    <SiNextdotjs key="nextjs" />,
                    <SiFramer key="framer" />
                ],
            },
            {
                title: "UI/UX Design",
                icons: [
                    <FaFigma key="figma" />,
                    <SiAdobexd key="adobexd" />,
                    <SiAdobephotoshop key="adobephotoshop" />,
                ],
            },
        ],
    },
    {
        title: "Educação",
        info: [
            {
                title: "RocketSeat - Ignite (TypeScript - React - NextJs - API)",
                stage: "10/2023",
                key: "education1",
            },
            {
                title: "Matheus Battisti - React (API Rest)",
                stage: "08/2023",
                key: "education2",
            },
            {
                title: "Origamid - React Completo",
                stage: "06/2023",
                key: "education3",
            },
            {
                title: "DevSuperior - JavaScript",
                stage: "04/2023",
                key: "education4",
            },
            {
                title: "Origamid - JavaScript Completo",
                stage: "03/2023",
                key: "education5",
            },
            {
                title: "B7WEB - HTML5 e CSS3",
                stage: "01/2023",
                key: "education6",
            },
            {
                title: "Origamid - HTML5 e CSS3",
                stage: "12/2022",
                key: "education7",
            },
            {
                title: "Origamid - Ui Design",
                stage: "12/2022",
                key: "education8",
            },
            {
                title: "Udemy - JAVA Programação Orientada a Objetos",
                stage: "05/2022",
                key: "education9",
            },
        ],
    },
    {
        title: "Experiência",
        info: [
            {
                title: "Rede D'OR São Luiz | Auxiliar de Suprimentos",
                stage: "11/2022 - 02/2023",
                key: "experience1",
            },
            {
                title: "Kwai - Editor",
                stage: "03/2022 - 10/2022",
                key: "experience2",
            },
            {
                title: "Editor VFX - Freelancer",
                stage: "2020 - 2022",
                key: "experience3",
            },
            {
                title: "Criador de Conteúdo",
                stage: "2020 - 2022",
                key: "experience4",
            },
        ],
    },
    {
        title: "Formação",
        info: [
            {
                title: "Cursando Análise e Desenvolvimento de Sistemas - UNICID",
                stage: "01/2023 - 12/2024",
                key: "formation1",
            },
            {
                title: "Senac São Miguel Paulista | WINDOWS E OFFICE 2016",
                stage: "06/2019 - 12/2019",
                key: "formation2",
            },
        ],
    },
];