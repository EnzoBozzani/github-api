import useFetchFollowers from "../../hooks/useFetchFollowers";
import { FollowerResponse } from "../../types/FollowerResponse";
import { UserResponse } from "../../types/UserResponse";
import styles from "./FollowSection.module.scss";
import User from "./User"

const FollowSection = (props: {user: UserResponse, fetchUser: Function}) => {
    const { followers, fetchFollowers } = useFetchFollowers(); 
    const u = props.user;
    fetchFollowers(u);
    return (
        <div className={styles.wrapper}>
            <strong className="display-6 white-color">Some Followers</strong>
            {followers.length !== 0 ? 
                <span>(All followers at <a href={`https://github.com/${props.user.login}?tab=followers`}>https://github.com/${props.user.login}?tab=followers</a>)</span>
            :
                null
            }
            <section className={styles.followers}>
                {followers.length !== 0 ? 
                    followers.map((f: FollowerResponse, i: number) => {
                        if (i > 3){
                            return null;
                        } else {
                            return (
                                <User user={f} fetchUser={props.fetchUser}/>
                            )
                        }
                    }) 
                    :
                        (
                            <>
                                <div className={styles.noFollowers}>
                                    <img src="/followers.svg" alt="" />
                                    <p>
                                        This user doesn't <br></br>have followers! :(
                                    </p>
                                </div>
                            </>
                        )
                    }
            </section>
        </div>
    )
}

export default FollowSection;