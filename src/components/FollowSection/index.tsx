import useFetchFollowers from "../../hooks/useFetchFollowers";
import { FollowerResponse } from "../../types/FollowerResponse";
import { UserResponse } from "../../types/UserResponse";
import styles from "./FollowSection.module.scss";

const FollowSection = (props: {user: UserResponse}) => {
    const { followers, fetchFollowers } = useFetchFollowers(); 
    const u = props.user;
    fetchFollowers(u);
    return (
        <div className={styles.wrapper}>
            {followers.map((f: FollowerResponse, i: number) => {
                return (
                    <h1 key={i}>{f.login}</h1>
                )
            })}
        </div>
    )
}

export default FollowSection;