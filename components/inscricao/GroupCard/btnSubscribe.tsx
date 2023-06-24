'use client'

import { MouseEvent } from 'react';
import styles from './btnSubscribe.module.css'

import { BsFillPersonPlusFill } from 'react-icons/bs'

const subscribe = (event:  MouseEvent<HTMLButtonElement>) => {
    console.log('subscribe');
}

export default function btnSubscribe() {
    return (
        <button id='btnSubscribe' className={styles.buttonSubscribe} type='button' onClick={subscribe}>
            <BsFillPersonPlusFill className={styles.icon}/>
        </button>
    );
}