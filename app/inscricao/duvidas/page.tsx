import FormDuvidas from "@/components/duvidas/FormDuvidas";
import HorizontalScroll from "@/components/HorizontalScroll";

import styles from './duvidasPage.module.css'
import Card from "@/components/Card";

const cards = [1,2,3,4,5,6,7,8,9,10]

export default function DuvidasPage() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Dúvidas</h2>
            <FormDuvidas/>
            <HorizontalScroll>
                {cards.map((item: number) => <Card key={item} width='200px' height='250px'></Card>)}
            </HorizontalScroll>
        </div>
    );
}