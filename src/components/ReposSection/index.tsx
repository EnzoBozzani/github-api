import styles from "./ReposSection.module.scss";
import { UserResponse } from "../../types/UserResponse";
import useFetchRepos from "../../hooks/useFetchRepos";
import Repo from "./Repo";

export default function ReposSection(props: {user: UserResponse}){
    const u = props.user;
    const { repos, fetchRepos } = useFetchRepos();
    fetchRepos(u);
    return (
        <section className={styles.wrapper}>
            <div className={styles.social}>
                <div className={styles.followers}>
                    <span className={styles.number}>{u.followers}</span>
                    <span>Followers</span>
                </div>
                <div>
                    <span className={styles.number}>{u.following}</span>
                    <span>Following</span>
                </div>
                <div>
                    <span className={styles.number}>{u.public_repos}</span>
                    <span>Public Repos</span>
                </div>
                <div>
                    <span className={styles.number}>{u.public_gists}</span>
                    <span>Public Gists</span>
                </div>
            </div>
            <div className={styles.repos}>
                <div className={styles.reposTitle}>
                    <strong className="display-6">Some Repositories</strong>
                    <span style={{color: '#ffffff5f'}}>(All Repositories at <a target="_blank" href={`https://github.com/${u.login}?tab=repositories`}>{`https://github.com/${u.login}?tab=repositories`}</a>)</span>
                </div>
                {repos.map((repo:any, i:number) => {
                    if (i > 5 || i === 0){
                        return null;
                    }
                    else {
                        return (
                            <Repo repo={repo} k={i}/>
                        )
                    }
                })}
            </div>
        </section>
    )
}

//se o numDeRepos === 0, printa Oops..., senão printa os Repos
//caso alguma informação não exista, colocar Non-Informed {u.info || 'Non-Informed'} -> para todas as infos