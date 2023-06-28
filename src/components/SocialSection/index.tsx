import styles from "./SocialSection.module.scss";
import { UserResponse } from "../../types/UserResponse";
import useFetchRepos from "../../hooks/useFetchRepos";
import Repo from "./Repo";

export default function SocialSection(props: {user: UserResponse}){
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
                {repos.map((repo:any, index:number) => {
                    if (index > 5 || index === 0){
                        return null;
                    }
                    else {
                        return (
                            <Repo repo={repo} index={index}/>
                        )
                    }
                })}
            </div>
        </section>
    )
}

//colocar todas as informações dos usuários e dos repositórios