import { FollowerResponse } from "../../../types/FollowerResponse";
import styles from "./styles.module.scss";

const User = (props: {user: FollowerResponse, key: number}) => {
    return (
        <div key={props.key}>
            <p className="display-6 white-color">{props.user.login}</p>
        </div>
    )
}