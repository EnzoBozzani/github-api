import useFetchFollowers from "../../hooks/useFetchFollowers";
import { FollowerResponse } from "../../types/FollowerResponse";
import { UserResponse } from "../../types/UserResponse";
import styles from "./FollowSection.module.scss";
import User from "./User"

const FollowSection = (props: {user: UserResponse}) => {
    const { followers, fetchFollowers } = useFetchFollowers(); 
    const u = props.user;
    fetchFollowers(u);
    return (
        <div className={styles.wrapper}>
            <strong className="display-6 white-color">Some Followers</strong>
            <span>(All followers at <a href={`https://github.com/${props.user.login}?tab=followers`}>https://github.com/${props.user.login}?tab=followers</a>)</span>
            <section className={styles.followers}>
                {followers.map((f: FollowerResponse, i: number) => {
                    if (i > 3){
                        return null;
                    } else {
                        return (
                            <User user={f}/>
                        )
                    }
                })}
            </section>
        </div>
    )
}

export default FollowSection;