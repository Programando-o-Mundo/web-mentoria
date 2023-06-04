import { BsFillPatchExclamationFill } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { HiInformationCircle } from 'react-icons/hi'

import Image from 'next/image'
import Link from 'next/link'

import styles from './header.module.css'
import { HeaderButton, NavbarLink } from './headerDynamicComponents'

export default function Navbar() {
    return (
        <header id='pageHeader' className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.headerTitleContainer}>
                    <Link href='/inscricao' className={styles.headerTitleLink}>
                        <h1 className={styles.headerTitle}>
                            Mentoria
                        </h1>
                    </Link>
                    <HeaderButton/>
                </div>
                <div className={styles.headerDetails}>
                    <nav className={styles.navigation}>
                        <NavbarLink icon={<BsFillPatchExclamationFill className={styles.navigationLinkIcon} />} text='Noticias' link='/inscricao/noticias'/>
                        <NavbarLink icon={<MdVerified className={styles.navigationLinkIcon} />} text='Inscrição' link='/inscricao'/>
                        <NavbarLink icon={<HiInformationCircle className={styles.navigationLinkIcon} />} text='Duvidas' link='/inscricao/duvidas'/>
                    </nav>
                    <div className={styles.userCard}>
                        <Link className={styles.userCardLink} href='/inscricao/perfil'>
                            <div className={styles.userImageContainer}>
                                <Image
                                    className={styles.userImage}
                                    src='/images/GustavoL.jpeg'
                                    alt='Imagem de usuário'
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className={styles.userNameContainer}>
                                <h3 className={styles.userName}>GustavoL</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
