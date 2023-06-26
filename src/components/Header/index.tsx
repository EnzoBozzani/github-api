import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header(props: { fetchUser: Function, valid: boolean }) {
    const [username, setUsername] = useState("");
    return (
        <header className={styles.header}>
            <a href=""><img src="/github.svg" alt="Git Hub Logo" className={styles.githubLogo} /></a>
            <form className={styles.form}>
                <div>
                    <span>
                        <img src="/user.png" alt="" />
                    </span>
                    <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="GitHub Username (e.g EnzoBozzani)" />
                    <button
                        type="submit"
                        onClick={(ev) => {
                            ev.preventDefault();
                            props.fetchUser(username);
                            setUsername('');
                        }}
                    >
                        <img src="/lupa.svg" alt="" />
                    </button>
                </div>
                <span className={styles.userNotValid}>
                    {
                        !props.valid ?
                            (
                                <>
                                    User doesn't exist!
                                </>
                            )
                            :
                            null
                    }
                </span>
            </form>
        </header>
    )
}