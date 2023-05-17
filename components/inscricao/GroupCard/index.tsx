import Card from '@/components/Card';
import BtnSubscribe from './btnSubscribe'

import styles from './groupCard.module.css'

export default function GroupCard(props: {
    id: number,
    division: string,
    mentores: [string],
    mentorado: [string]
}) {
    return (
        <Card link={`/inscricao/${props.division}/${props.id}`} height='150px'>
            <div className={styles.container}>
                <div className={styles.mentoresContainer}>
                    <h3>{props.mentores.join(' ')}</h3>
                </div>
                <div className={styles.mentoradoContainer}>
                    {props.mentorado.join(' ')}
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.buttonSubscribe}>
                        <BtnSubscribe/>
                    </div>
                </div>
            </div>
        </Card>
    );
}