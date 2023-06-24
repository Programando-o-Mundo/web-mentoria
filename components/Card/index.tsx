import Link from 'next/link'

import styles from './card.module.css'
import { CSSProperties } from 'react';

export default function Card(props: {
    link?: string, 
    width?: string | undefined, 
    height?: string | undefined, 
    color?: string | undefined, 
    className?: string | undefined,
    children?: React.ReactNode}) {

    const sty: CSSProperties = {};

    if(props.width) sty['width'] = props.width;
    if(props.height) sty['height'] = props.height;
    if(props.color) sty['backgroundColor'] = props.color;

    return (
        <article className={`${styles.container} ${props.className}`} style={sty}>
            {
                function() {
                    if(!props.link) return props.children;
                    else return (
                        <Link href={props.link} className={styles.cardLink}>
                            {props.children}
                        </Link>
                    );
                }()
            }
        </article>
    );
}
