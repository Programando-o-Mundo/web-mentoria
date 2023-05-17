import Image from 'next/image'
import Link from 'next/link'
import Backwards from '@/components/Backwards'

import styles from './info.module.css'

export default function info() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.container}>
                <Backwards align='center' link='/'/>
                <section className={styles.textContainer}>
                    <h1 className={styles.title}>O que é a Mentoria?</h1>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias architecto praesentium provident maxime, itaque repellendus quos laudantium possimus sit eligendi, nam labore, nisi ipsa. Illum neque tempora ad ducimus reiciendis facere ipsam necessitatibus reprehenderit, doloribus modi aspernatur iste sequi earum amet aliquam officiis blanditiis aliquid? Reiciendis, suscipit voluptas non repellendus esse pariatur ullam molestiae. Beatae fugit voluptate perferendis. Labore, pariatur at odio, reprehenderit placeat libero non minima tempore sapiente, quaerat ut explicabo ipsa molestias dolorem laudantium. Quibusdam sint odio facilis maxime dolorum fugit blanditiis impedit eum atque perspiciatis nihil minus, laborum labore esse provident. Fugit minima illo et error.</p>
                    <div className={styles.videoContainer}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-s5ZWG817rQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi at nisi, in eos quam nihil impedit itaque beatae dolor id. Alias quo voluptatibus laboriosam dolorem sunt sed nemo esse a est. Iure voluptatibus tenetur ipsa omnis id suscipit quae sunt quaerat obcaecati iste nisi, ipsam distinctio perferendis asperiores unde, aperiam reiciendis. Earum ducimus vitae, distinctio ea fugiat enim libero saepe tenetur praesentium qui voluptatibus fuga aliquam eaque, aspernatur ipsum deleniti. Officiis, obcaecati quos. Minus commodi dolores a veniam voluptas nam iste perspiciatis pariatur ipsum, in saepe delectus amet ex accusantium officia natus qui deserunt alias mollitia, vel, fugit dignissimos!</p>
                </section>
                <section className={styles.ownersContainer}>
                    <div className={styles.ownerCard}>
                        <Link href='https://github.com/GustavoLR548' className={styles.ownerCardLink}>
                            <div className={styles.ownerCardImageContainer}>
                                <Image className={styles.ownerCardImage} src='/images/GustavoL.jpeg' height={200} width={200} alt='Gustavol Lopes Rodrigues'/>
                            </div>
                            <h2 className={styles.ownerCardTitle}>
                                Gustavol Lopes Rodrigues
                            </h2>
                        </Link>
                    </div>
                    <div className={styles.ownerCard}>
                        <Link href='http://lattes.cnpq.br/6790342959640905' className={styles.ownerCardLink}>
                            <div className={styles.ownerCardImageContainer}>
                                <Image className={styles.ownerCardImage} src='/images/Carlos.jpg' height={200} width={200} alt='Carlos Augusto Paiva da Silva Martins'/>
                            </div>
                            <h2 className={styles.ownerCardTitle}>
                                Carlos Augusto Paiva da Silva Martins
                            </h2>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}