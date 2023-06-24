import styles from './cardNoticias.module.css'
import Card from '@/components/Card'

function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength) + '...';
    }
}

export default function noticias(props: {
    title: string,
    description: string,
    date: string,
}) {
    return (
        <Card className={styles.Card} link={`/inscricao/noticias/${props.title}`} height='300px' width='200px' color='transparent'>
            <div className={styles.cardContainer}>
                <div className={styles.cardInfoContainer}>
                    <div className={styles.cardTitleContainer}>
                        <h4 className={styles.cardTitle}>
                            {props.title}
                        </h4>
                    </div>
                    <p className={styles.cardDescp}>
                        {truncateText(props.description, 130)}
                    </p>
                </div>
            </div>
        </Card>
    );
}