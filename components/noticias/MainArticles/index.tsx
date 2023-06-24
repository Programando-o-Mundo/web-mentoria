import Link from 'next/link';
import styles from './mainArticles.module.css'

interface News {
    title: string,
    date: Date,
    description: string,
    image: string,
}

export default function noticias(props: {
    newsList: News[],
}) {
    return (
        <section className={styles.mainArticles}>
            <div>
                <h2 className={styles.destaques_noticias}>Destaques</h2>
            </div>
            <div className={styles.mainArticles_blocks}>
                {/* <div className={styles.mainArticles_block1}>
                    <Link href={`/inscricao/noticias/${props.newsList[0].title}`}>
                        <h3>{props.newsList[0].title}</h3>
                    </Link>
                    <img src={props.newsList[0].image} alt="image" />
                </div> */}
                {/* <div className={styles.mainArticles_block2}> */}
                <div className={styles.mainArticles_block2_in}>
                    <Link className={styles.block_title} href={`/inscricao/noticias/${props.newsList[1].title}`}>
                        <h3>{props.newsList[1].title}</h3>
                    </Link>
                    <div className={styles.block_description}><p>{props.newsList[1].description}</p></div>
                    <img src={props.newsList[1].image} alt="image" />
                </div>
                <div className={styles.mainArticles_block2_in}>
                    <Link className={styles.block_title} href={`/inscricao/noticias/${props.newsList[2].title}`}>
                        <h3>{props.newsList[2].title}</h3>
                    </Link>
                    <div className={styles.block_description}><p>{props.newsList[1].description}</p></div>
                    <img src={props.newsList[2].image} alt="image" />
                </div>
                {/* </div> */}
            </div>
        </section>
    );
}