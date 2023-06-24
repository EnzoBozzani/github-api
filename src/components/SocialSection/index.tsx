import styles from "./SocialSection.module.scss";
import { UserResponse } from "../../UserResponse";

export default function SocialSection(props: {user: UserResponse}){
    return (
        <section className={styles.wrapper}>
            <div className={styles.social}>
                <div className={styles.followers}>
                    <span>Followers</span>
                    <span>{props.user.followers}</span>
                </div>
            </div>
        </section>
    )
}