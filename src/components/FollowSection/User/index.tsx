import { FollowerResponse } from "../../../types/FollowerResponse";
import styles from "./styles.module.scss";

const UserCard = (props: {user: FollowerResponse, fetchUser: Function}) => {
    return (
        <div key={props.user.id} className={styles.wrapper} onClick={() => props.fetchUser(props.user.login)}>
            <img src={props.user.avatar_url} alt="" />
            <p className="display-6 white-color">{props.user.login.length > 14 ? props.user.login.slice(0, 15) : props.user.login}</p>
            <p className={styles.tip}>Click to search this profile!</p>
        </div>
    )
}

export default UserCard;