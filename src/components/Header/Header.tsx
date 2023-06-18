import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header(props: {fetchUser: Function}) {
    const [username, setUsername] = useState("");
    return (
        <header className={styles.header}>
            <a href=""><img src="/github.svg" alt="Git Hub Logo" className={styles.githubLogo} /></a>
            <div className={styles.form}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" className="form-control" placeholder="GitHub Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button onClick={() => props.fetchUser(username)}>
                    Search
                </button>
            </div>
        </header>
    )
}