import Link from 'next/link'
import { BsInfoLg, BsDiscord } from 'react-icons/bs'
import TelegramChannels from '@/components/login/TelegramChannels'

import styles from './medias.module.css'

export default function Medias() {
    return (
        <section className={styles.container}>
            <Link href='/info' className={styles.card}>
                <div className={styles.cardIconContainer}>
                    <BsInfoLg className={styles.icon}/>
                </div>
            </Link>
            <TelegramChannels/>
            <Link href='https://discord.gg/5VfHED48nn' className={styles.card}>
                <div className={styles.cardIconContainer}>
                    <BsDiscord className={styles.icon}/>
                </div>
            </Link>
        </section>
    );
}