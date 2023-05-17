'use client'

import { BiMenu } from 'react-icons/bi';

import styles from './headerButton.module.css'
import stylesHeader from './header.module.css'
import { ReactNode } from 'react';
import Link from 'next/link';

const menuToggle = () => {
    const header = document.getElementById('pageHeader');
    header?.classList.toggle(stylesHeader.headerOpened);

    const btnToggle = document.getElementById('headerButtonToggle');
    btnToggle?.classList.toggle(styles.headerButtonOpened);
}

export function HeaderButton() {
    return (
        <button id='headerButtonToggle' className={styles.headerButton} onClick={menuToggle} type='button'>
            <BiMenu className={styles.headerButtonIcon} />
        </button>
    );
}

interface NavbarLinkProps {
    icon: ReactNode;
    text: string;
    link: string;
}

export function NavbarLink({ icon, text, link }: NavbarLinkProps) {
    return (
        <Link href={link} className={stylesHeader.navigationLink} onClick={menuToggle}>
            {icon}
            <h2 className={stylesHeader.navigationLinkTitle}>{text}</h2>
        </Link>
    );
}
