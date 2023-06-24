import Header from '@/components/header'

import styles from './layout.module.css'

export default function inscricaoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.leyoutContainer}>
            <Header/>
            <main className={styles.mainContainer}>
                {children}
            </main>
        </div>
    );
}