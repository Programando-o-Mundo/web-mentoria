import Link from 'next/link'
import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner() {
    return (
        <section className={styles.bannerSection}>
            <Link href='https://youtu.be/-s5ZWG817rQ'>
                <h1 className={styles.title}>Mentoria</h1>
            </Link>
            <div className={styles.ownersContainer}>
                <Link href='https://github.com/GustavoLR548'>
                    <div className={styles.cardOwner}>
                        <Image
                            className={styles.cardOwnerImage}
                            src='/images/GustavoL.jpeg'
                            alt='Gustavo Lopes Rodrigues'
                            width={150}
                            height={150}
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
}