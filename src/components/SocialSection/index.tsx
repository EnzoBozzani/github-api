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
                <p className="display-6 white-color"><strong>Some Repositories</strong></p>
                {repos.map((repo:any, index:number) => {
                    if (index > 4){
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