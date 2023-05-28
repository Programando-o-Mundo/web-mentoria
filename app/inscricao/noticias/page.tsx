import CardNoticias from '@/components/noticias/CardNoticias'
import HorizontalScroll from '@/components/HorizontalScroll';
import MainArticles from '@/components/noticias/MainArticles';
import SoloCardNoticias from '@/components/noticias/SoloCardNoticias';
import styles from './noticiasPage.module.css'

import { faker } from '@faker-js/faker/locale/pt_BR';

function generateNewsGroup(range: number, imgWidth: number, imgHeight: number) {
    return [...Array(range)].map(() => {
        return {
            title: faker.lorem.words(5),
            date: faker.date.soon(),
            description: faker.lorem.paragraph(),
            image: faker.image.urlPicsumPhotos({ width: imgWidth, height: imgHeight }),
        }
    })
}

const news = generateNewsGroup(13, 128, 128);
const latestNews = generateNewsGroup(5, 400, 200);

export default function noticias() {
    return (
        <>
            {
                function () {
                    if (news.length > 3)
                        return <MainArticles newsList={news}></MainArticles>
                }()
            }

            <section>
                <div>
                    <h2>Últimas notícias</h2>
                </div>
            {
                latestNews.map((item) =>
                    <SoloCardNoticias
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        image={item.image}
                    />
                )

            }
            </section>
            <section>
                <div>
                    <h2>Todas as Notícias</h2>
                </div>
                <HorizontalScroll>
                    {
                        news.map((item) =>
                            <CardNoticias
                                title={item.title}
                                date={item.date}
                                description={item.description}
                            />
                        )
                    }
                    {
                        latestNews.map((item) =>
                            <CardNoticias
                                title={item.title}
                                date={item.date}
                                description={item.description}
                            />
                        )

                    }
                </HorizontalScroll>
            </section>
        </>
    );
}
