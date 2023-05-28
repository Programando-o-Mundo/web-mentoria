import styles from './subscription.module.css'

export default function Subscription(props: {children?: React.ReactNode}) {
    return (
        <section className={styles.container}>
            <div>
                <div className={styles.descriptionContainer}>
                    <h3>Descrição</h3>
                    <p>{props.children ? props.children : 'Houston, we have a problem!'}</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <button type='button' className={styles.button}>Inscrever-se</button>
                    <button type='button' className={styles.button}>Sair</button>
                </div>
            </div>
        </section>
    );
}