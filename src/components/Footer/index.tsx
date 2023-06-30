import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <span>
            @enzobozzani
            </span>
            <span>
                ·
            </span>
            <a href="https://github.com/EnzoBozzani" target="_blank">
                GitHub
            </a>
            <span>
                ·
            </span>
            <a href="https://www.linkedin.com/in/enzo-bozzani-812a7322a/" target="_blank">
                Linkedin
            </a>
        </footer>
    )
}

export default Footer;