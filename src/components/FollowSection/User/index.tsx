import { FollowerResponse } from "../../../types/FollowerResponse";
import styles from "./styles.module.scss";

const UserCard = (props: {user: FollowerResponse}) => {
    return (
        <a key={props.user.id} className={styles.wrapper} href={props.user.html_url}>
            <img src={props.user.avatar_url} alt="" />
            <p className="display-6 white-color">{props.user.login}</p>
            <p className={styles.tip}>Click to go to GitHub profile!</p>
        </a>
    )
}

export default UserCard;