import Link from 'next/link'

import styles from './card.module.css'

export default function Card(props: {
    link?: string, 
    width?: string | undefined, 
    height?: string | undefined, 
    color?: string | undefined, 
    className?: string | undefined,
    children?: React.ReactNode}) {
    return (
        <article className={`${styles.container} ${props.className}`} style={{
            width: (props.width ? props.width : 'auto'),
            height: (props.height ? props.height : 'auto'),
            backgroundColor: (props.color ? props.color : 'white')
        }}>
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
