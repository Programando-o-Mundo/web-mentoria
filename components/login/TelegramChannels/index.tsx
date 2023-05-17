'use client'

import TelegramSection from './telegramSection';

import buttonStyles from '@/components/login/Medias/medias.module.css'
import styles from './telegramSection.module.css'
import { FaTelegramPlane } from 'react-icons/fa';


const changeVisibility = () => {
    const container = document.getElementById('telegramSectionContainer');
    container?.classList.toggle(styles.hidden);
}

const changeVisibilityKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if(event.key === 'Escape') changeVisibility();
}

export default function TelegramChannels() {
    return (
        <div>
            <button style={{cursor: 'pointer'}} className={buttonStyles.card} type='button' onClick={changeVisibility} onKeyDown={changeVisibilityKey}>
                <div className={buttonStyles.cardIconContainer}>
                    <FaTelegramPlane className={buttonStyles.icon}/>
                </div>
            </button>
            <div id='telegramSectionContainer' className={`${styles.hidden} ${styles.telegramSectionContainer}`} onClick={changeVisibility}>
                <TelegramSection/>
            </div>
        </div>
    );
}
