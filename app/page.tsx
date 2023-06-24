import Form from '@/components/login/Form'
import Banner from '@/components/login/Banner'
import Medias from '@/components/login/Medias'
import styles from '@/style/page.module.css'


export default function login() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.container}>
                <Banner />
                <Form />
                <Medias />
            </div>
        </main>
    );
}
