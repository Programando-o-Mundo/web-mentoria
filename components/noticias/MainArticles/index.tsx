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
        <section>
            <div>
                <h2>Destaques</h2>
            </div>
            <div>
                <div>
                    <Link href={`/inscricao/noticias/${props.newsList[0].title}`}>
                        <h3>{props.newsList[0].title}</h3>
                    </Link>
                    <img src={props.newsList[0].image} alt="image" />
                </div>
                <div>
                    <div>
                        <Link href={`/inscricao/noticias/${props.newsList[1].title}`}>
                            <h3>{props.newsList[1].title}</h3>
                        </Link>
                        <img src={props.newsList[1].image} alt="image" />
                    </div>
                    <div>
                        <Link href={`/inscricao/noticias/${props.newsList[2].title}`}>
                            <h3>{props.newsList[2].title}</h3>
                        </Link>
                        <img src={props.newsList[2].image} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
}