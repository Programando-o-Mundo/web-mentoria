import styles from './cardNoticias.module.css'
import Card from '@/components/Card'

export default function noticias(props: {
    title: string,
    description: string,
    date: string,
}) {
    return (
        <section>
            <Card link={`/inscricao/noticias/${props.title}`} height='200px' width='125px' color='var(--light-blue)'>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitleContainer}>
                        <h4 className={styles.cardTitle}>
                            {props.title}
                        </h4>
                        <p className={styles.cardCampusName}>{props.description}</p>
                    </div>
                </div>
            </Card>
        </section>
    );
}