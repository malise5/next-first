import Link from "next/link";
import style from "./navbar.module.css";
import Toggle from "../DarkMode/Toggle";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contacts",
        url: "/contacts",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link href="/" className={style.logo}>
                Malise💻
            </Link>
            <div className={style.links}>
                <Toggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={style.link}>
                        {link.title}
                    </Link>
                ))}
                <button className={style.logout}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
