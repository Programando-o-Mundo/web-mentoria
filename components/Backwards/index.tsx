import Link from 'next/link'
import styles from './backwards.module.css'
import { TbArrowNarrowLeft } from 'react-icons/tb';

export default function Backwards(props: {align: 'center' | 'left' | 'right', link: string}) {
    let classDefinition = styles.center;

    if(props.align === 'left')
        classDefinition = styles.left;
    else if(props.align === 'right')
        classDefinition = styles.right;

    return (
        <section className={`${styles.sectionBackwords} ${classDefinition}`}>
            <Link href={props.link} className={styles.backwardsLink}>
                <TbArrowNarrowLeft className={styles.backwardsIcon}/>
            </Link>
        </section>
    );
}