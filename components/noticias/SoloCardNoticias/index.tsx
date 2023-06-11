import Link from 'next/link';
import styles from './soloCardNoticias.module.css'

export default function noticias(props: {
    title: string,
    description: string,
    date: Date,
    image: string,
}) {
    return (
        <article className={styles.soloContainer}>
            {
                function () {
                    return (
                        <>
                            <div className={styles.soloInformationContainerOutsite}>
                                <div className={styles.soloInformationContainer}>
                                    <Link href={`/inscricao/noticias/${props.title}`} className={styles.soloLink}>
                                        <h3 className={styles.soloTitle}>
                                            {props.title}
                                        </h3>
                                    </Link>
                                    <p className={styles.soloDescription}>{props.description}</p>
                                    <p className={styles.soloDate}>{props.date.toString()}</p>
                                </div>
                            </div>
                            <div className={styles.soloCardImg}>
                                <div className={styles.soloImage}><img src={props.image} alt="image" /></div>
                            </div>
                        </>
                    )
                }()
            }
        </article>
    );
}