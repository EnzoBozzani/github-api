import RepoResponse from "../../../types/RepoResponse";
import styles from "./Repo.module.scss";

export default function Repo(props: {repo: RepoResponse}) {
    const r = props.repo;
    const formatDate = (date: string) => {
        return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`
    }
    return (
        <a href={r.html_url} target="_blank" className={styles.wrapper} key={r.id}>
            <header>
                <p className={styles.title}>{r.name}</p>
                <p className={styles.tip}>Click to go to repository!</p>
                <p className={styles.visib}>{r.private ? 'Private' : 'Public'}</p>
            </header>
            <footer>
                <span>Main Stack: <span className={styles.apiInfo}>{r.language || 'None'}</span></span>
                <span>Created at: <span className={styles.apiInfo}>{formatDate(r.created_at)}</span></span>
                <span>Last push: <span className={styles.apiInfo}>{formatDate(r.pushed_at)}</span></span>
            </footer>
        </a>  
    )
}