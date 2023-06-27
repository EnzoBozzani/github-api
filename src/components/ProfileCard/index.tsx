import { UserResponse } from "../../types/UserResponse";
import styles from "./ProfileCard.module.scss";

export default function ProfileCard(props: {user: UserResponse}){
    return (
        <aside className={styles.wrapper}>
            <img src={props.user.avatar_url} alt="" />
            <span className="display-6"><strong>{props.user.login}</strong></span>
            <span className={styles.username}>{props.user.name === '' ? props.user.login : props.user.name} | <a href={props.user.html_url}>{props.user.html_url}</a></span>
            <span className={styles.bio}>{props.user.bio}</span>
        </aside>
    )   
}