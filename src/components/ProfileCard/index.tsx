import { UserResponse } from "../../types/UserResponse";
import styles from "./ProfileCard.module.scss";

export default function ProfileCard(props: { user: UserResponse }) {
    const u = props.user;
    const formatDate = (date: string) => {
        return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`
    }
    return (
        <aside className={styles.wrapper}>
            <img src={u.avatar_url} alt="" />
            <div className={styles.child1}>
                <span className="display-6"><strong>{u.login}</strong></span>
                <span className={styles.username}>{u.name ? u.name : u.login} | <a href={u.html_url}>{u.html_url}</a></span>
            </div>
            <span className={styles.bio}>{u.bio || "Oops... This user doesn't have a bio :("}</span>
            <div className={styles.geralInfo}>
                <div>
                    <img src="/ping.png" alt="" />
                    <span>{u.location || 'No Location Informed'}</span>
                </div>
                <span>{u.company || 'Company Not Informed'}</span>
                <span>Blog: {u.blog ? (<a target="_blank" href={u.blog}>{u.blog}</a>) : ('None')}</span>
                <span>{u.email || ''}</span>
                <span>Account created at {formatDate(u.created_at)}</span>
            </div>
        </aside>
    )
}