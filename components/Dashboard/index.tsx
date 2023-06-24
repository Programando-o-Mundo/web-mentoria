import styles from './dashboard.module.css'

export default function Dashboard(props: {title: string, children: React.ReactNode}) {
    return (
        <section className={styles.sectionDashboard}>
            <div className={styles.dashboardTitleContainer}>
                <h3 className={styles.dashboardTitle}>{props.title}</h3>
            </div>
            <div className={styles.scroll}>
                <div className={styles.cardsContainer}>
                    {props.children}
                </div>
            </div>
        </section>
    );
}