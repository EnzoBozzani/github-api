import RepoResponse from "../../../types/RepoResponse";
import styles from "./Repo.module.scss";

export default function Repo(props: {repo: RepoResponse, index: number}) {
    const r = props.repo;
    return (
        <div className={styles.wrapper} key={props.index}>
            <p>{r.name}</p>
        </div>
    )
}