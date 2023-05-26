import styles from "./Header.module.scss";

export default function Header(){
    return (
        <header className={styles.header}>
            <img src="/github.webp" alt="Git Hub Logo" className={styles.githubLogo} />
        </header>
    )
}