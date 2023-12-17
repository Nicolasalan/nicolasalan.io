import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/nicolasalan",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolasalan/",
    icon: <FaLinkedin />,
  },
];

export default ConnectLinks;