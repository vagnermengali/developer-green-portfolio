import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from "react-icons/hi2";

export const navData = [
    { id: "nav1", name: "Home", path: "/", icon: <HiHome key="hiHome" /> },
    { id: "nav2", name: "Sobre", path: "/about", icon: <HiUser key="hiUser" /> },
    { id: "nav3", name: "Serviços", path: "/services", icon: <HiRectangleGroup key="hiRectangleGroup" /> },
    { id: "nav4", name: "Projetos", path: "/projects", icon: <HiViewColumns key="hiViewColumns" /> },
    {
        id: "nav5",
        name: "Indicações",
        path: "/indications",
        icon: <HiChatBubbleBottomCenterText key="hiChatBubbleBottomCenterText" />,
    },
    {
        id: "nav6",
        name: "Contato",
        path: "/contact",
        icon: <HiEnvelope key="hiEnvelope" />,
    },
];
