import styles from "./MainSection.module.scss";

const MainSection = (props: {children: any}) => {
    return (
        <main className={styles.wrapper}>
            {props.children}
        </main>
    )
}

export default MainSection;