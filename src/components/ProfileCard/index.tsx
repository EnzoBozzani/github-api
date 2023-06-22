import { UserResponse } from "../../UserResponse";
import styles from "./ProfileCard.module.scss";

export default function ProfileCard(props: {user: UserResponse}){
    return (
        <aside className={styles.wrapper}>
            <img src={props.user.avatar_url} alt="" />
            <p className="display-6">{props.user.login}</p>
            <p className={styles.username}>{props.user.name}</p>
        </aside>
    )
}