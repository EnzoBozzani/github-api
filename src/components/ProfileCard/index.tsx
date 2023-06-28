import { UserResponse } from "../../types/UserResponse";
import styles from "./ProfileCard.module.scss";

export default function ProfileCard(props: {user: UserResponse}){
    const u = props.user;
    return (
        <aside className={styles.wrapper}>
            <img src={u.avatar_url} alt="" />
            <span className="display-6"><strong>{u.login}</strong></span>
            <span className={styles.username}>{u.name === '' ? u.login : u.name} | <a href={u.html_url}>{u.html_url}</a></span>
            <span className={styles.bio}>{u.bio}</span>
            <div className={styles.geralInfo}>
                <div>
                    <img src="/ping.png" alt="" />
                    <span>{u.location}</span>
                </div>
                <span>|</span>
            </div>
        </aside>
    )   
}