import Link from 'next/link'
import { BiLogoInstagramAlt, BiLogoDiscordAlt, BiLogoGmail, BiLogoWhatsapp, BiLogoTelegram } from 'react-icons/bi'

import styles from './socialMedia.module.css'

export default function SocialMedia() {
    return (
        <section className={styles.container}>
            <div className={styles.mediaContainer}>
                <Link className={styles.link} href='https://www.instagram.com/' title='Instagram'>
                    <BiLogoInstagramAlt className={styles.icon}/>
                </Link>
            </div>

            <div className={styles.mediaContainer}>
                <Link className={styles.link} href='https://discord.com/' title='Discord'>
                    <BiLogoDiscordAlt className={styles.icon}/>
                </Link>
            </div>

            <div className={styles.mediaContainer}>
                <Link className={styles.link} href='https://gmail.com/' title='Gmail'>
                    <BiLogoGmail className={styles.icon}/>
                </Link>
            </div>

            <div className={styles.mediaContainer}>
                <Link className={styles.link} href='https://web.whatsapp.com/' title='Whatsapp'>
                    <BiLogoWhatsapp className={styles.icon}/>
                </Link>
            </div>

            <div className={styles.mediaContainer}>
                <Link className={styles.link} href='https://telegram.org/' title='Telegram'>
                    <BiLogoTelegram className={styles.icon}/>
                </Link>
            </div>
        </section>
    );
}
