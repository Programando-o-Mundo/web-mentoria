'use client'

import { FormEvent } from 'react';
import styles from './formDuvidas.module.css'

const sumbitDuvidas = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target)
}

export default function FormDuvidas() {
    return (
        <section className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={sumbitDuvidas}>
                    <legend className={styles.formTitle}>Envie sua duvida</legend>
                    <div className={styles.nameEmailContainer}>
                        <div className={styles.field}>
                            <label htmlFor="name" className={styles.label}>Nome</label>
                            <input type="text" name="name" id="name" className={styles.input} placeholder='Qual o seu nome?' required/>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" name="email" id="email" className={styles.input} placeholder='Qual o seu email?' required/>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="title" className={styles.label}>Assunto</label>
                        <input type="text" name="title" id="title" className={styles.input} placeholder='Qual sua duvida?' required/>
                    </div>
                    <div className={styles.fieldTextarea}>
                        <label htmlFor="message" className={styles.label}>Mensagem</label>
                        <textarea name="message" id="message" className={styles.textarea} placeholder='Digite sua mensagem...' required></textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button id='buttonSubmitDuvidas' type='submit' className={styles.buttonSubmit}>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
