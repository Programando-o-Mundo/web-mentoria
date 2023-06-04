import styles from './cardNoticias.module.css'
import Card from '@/components/Card'

export default function noticias(props: {
    title: string,
    description: string,
    date: string,
}) {
    return (
        <Card link={`/inscricao/noticias/${props.title}`} height='300px' width='200px' color='var(--green-blue)'>
            <div className={styles.cardContainer}>
                <div className={styles.cardInfoContainer}>
                    <div className={styles.cardTitleContainer}>
                        <h4 className={styles.cardTitle}>
                            {props.title}
                        </h4>
                    </div>
                    <p className={styles.cardDescp}>{props.description}</p>
                </div>
            </div>
        </Card>
    );
}