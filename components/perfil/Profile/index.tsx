import Image from 'next/image'

import styles from './profile.module.css'

export default function Profile(props: {
    name: string,
    age: number,
    image: string,
    grade: string,
    course: string
}) {
    return (
        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={props.image} width={200} height={200} alt={props.name}/>
            </div>
            <div className={styles.profileDescriptionContainer}>
                <div className={styles.item}>
                    <p>{props.name}</p>
                </div>
                <div className={styles.item}>
                    <p>{props.age}</p>
                </div>
                <div className={styles.item}>
                    <p>{props.grade}</p>
                </div>
                <div className={styles.item}>
                    <p>{props.course}</p>
                </div>
            </div>
        </section>
    );
}