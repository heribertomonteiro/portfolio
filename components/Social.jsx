import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const socialLinks = [{
    icon: <FaGithub />,
    path: "/"
}, {
    icon: <FaLinkedin />,
    path: "/"
}, {
    icon: <FaInstagram />,
    path: "/"
}]

export default function Social({ containerStyles = "", iconStyles = "" }) {
    return (
        <div className={containerStyles}>
            {socialLinks.map((item, index) => (
                <Link href={item.path} key={index} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}