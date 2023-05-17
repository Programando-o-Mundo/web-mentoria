import Image from 'next/image'
import styles from './form.module.css'

export default function Form() {
    return (
        <section className={styles.formSection}>
            <div className={styles.formContainer}>
                <form action='/api/login' method='post'>
                    <legend className={styles.formTitle}>Login</legend>
                    <fieldset className={styles.formFieldset}>
                        <div className={styles.formField}>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email' id='email' name='email' placeholder='Email Address' required/>
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor='email'>Password</label>
                            <input type='password' id='password' name='password' placeholder='Password' required/>
                        </div>

                        <div className={styles.formCheckbox}>
                            <label htmlFor='rememberMe' className='inline-flex items-center'>
                                <input type='checkbox' id='rememberMe' name='rememberMe' className={styles.formCheckboxInput}/>
                                <span className={styles.formCheckboxText}>
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className={styles.formButtonContainer}>
                            <button type='submit' className={styles.formButton}>
                                Logar
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}