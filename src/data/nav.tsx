import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from "react-icons/hi2";

export const navData = [
    { key: "nav1", name: "Home", path: "/", icon: <HiHome key="hiHome" /> },
    { key: "nav2", name: "Sobre", path: "/about", icon: <HiUser key="hiUser" /> },
    { key: "nav3", name: "Serviços", path: "/services", icon: <HiRectangleGroup key="hiRectangleGroup" /> },
    { key: "nav4", name: "Projetos", path: "/projects", icon: <HiViewColumns key="hiViewColumns" /> },
    {
        key: "nav5",
        name: "Indicações",
        path: "/indications",
        icon: <HiChatBubbleBottomCenterText key="hiChatBubbleBottomCenterText" />,
    },
    {
        key: "nav6",
        name: "Contato",
        path: "/contact",
        icon: <HiEnvelope key="hiEnvelope" />,
    },
];
