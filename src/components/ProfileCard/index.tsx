import { UserResponse } from "../../UserResponse";
import styles from "./Profile.module.scss";

export default function ProfileCard(props: {user: UserResponse}){
    return (
        <aside className={styles.profileCard}>
            <img src={props.user.avatar_url} alt="" />
        </aside>
    )
}