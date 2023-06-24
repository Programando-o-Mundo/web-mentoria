import Image from 'next/image'
import styles from './student.module.css'

export default function Student(props: {
    image: string,
    name: string
}) {
    return (
        <article className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.images} src={props.image} alt={props.name} width={150} height={150}/>
            </div>
            <div className={styles.studentName}>{props.name}</div>
        </article>
    );
}

