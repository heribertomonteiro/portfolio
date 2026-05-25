import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const socialLinks = [{
    icon: <FaGithub />,
    path: "https://github.com/heribertomonteiro"
}, {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/heribertomonteiro/"
}, {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/heribertomonteiro/"
}]

export default function Social({ containerStyles = "", iconStyles = "" }) {
    return (
        <div className={containerStyles}>
            {socialLinks.map((item, index) => (
                <Link href={item.path} key={index} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}