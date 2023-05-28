import Image from 'next/image'

import styles from './mentor.module.css'

export default function Mentor(props: {
    name: string,
    grade: string,
    image: string
}) {
    return (
        <article className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    className={styles.image}
                    src={props.image} 
                    alt={props.name} 
                    width={150} 
                    height={150}
                />
            </div>
            <div className={styles.infoContainer}>
                <h3 className={styles.mentorName}>{props.name}</h3>
                <p className={styles.mentorGrade}>{props.grade}</p>
            </div>
        </article>
    );
}
