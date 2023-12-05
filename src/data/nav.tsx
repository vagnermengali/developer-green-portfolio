import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from "react-icons/hi2";

export const navData = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "Sobre", path: "/about", icon: <HiUser /> },
    { name: "Serviços", path: "/services", icon: <HiRectangleGroup /> },
    { name: "Projetos", path: "/projects", icon: <HiViewColumns /> },
    {
        name: "Indicações",
        path: "/indications",
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: "Contato",
        path: "/contact",
        icon: <HiEnvelope />,
    },
];