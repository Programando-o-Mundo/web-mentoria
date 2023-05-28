import Link from 'next/link';
import styles from './soloCardNoticias.module.css'
import Card from '@/components/Card'

export default function noticias(props: {
    title: string,
    description: string,
    date: Date,
    image: string,
}) {
    return (
        <section>
            <article className="" style={{
                width: "80%",
                height: "100%",
                backgroundColor: "white"
            }}>
                {
                    function () {
                        return (
                            <>
                                <div className={styles.cardContainer}>
                                    <div className={styles.cardTitleContainer}>
                                        <Link href={`/inscricao/noticias/${props.title}`} className={styles.cardLink}>
                                            <h3 className={styles.cardTitle}>
                                                {props.title}
                                            </h3>
                                        </Link>
                                        <p className={styles.cardCampusName}>{props.description}</p>
                                    </div>
                                </div>
                                <div><img src={props.image} alt="image" /></div>
                            </>
                        )
                    }()
                }
            </article>
        </section>
    );
}