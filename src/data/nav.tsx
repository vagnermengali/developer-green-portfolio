import {
    RiHome2Line,
    RiUser3Line,
    RiLayout4Line,
    RiTableLine,
    RiChatQuoteLine,
    RiMailSendLine
} from "react-icons/ri";

export const navData = [
    { id: "nav1", name: "Home", path: "/", icon: <RiHome2Line key="home" /> },
    { id: "nav2", name: "Sobre", path: "/about", icon: <RiUser3Line key="user" /> },
    { id: "nav3", name: "Serviços", path: "/services", icon: <RiLayout4Line key="layout" /> },
    { id: "nav4", name: "Projetos", path: "/projects", icon: <RiTableLine key="table" /> },
    {
        id: "nav5",
        name: "Indicações",
        path: "/indications",
        icon: <RiChatQuoteLine key="chat" />,
    },
    {
        id: "nav6",
        name: "Contato",
        path: "/contact",
        icon: <RiMailSendLine key="RiMailSendLine" />,
    },
];
