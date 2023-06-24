import Profile from '@/components/perfil/Profile'
import Schedule from '@/components/perfil/Schedule'
import Skills from '@/components/perfil/Skills'

import { faker } from '@faker-js/faker/locale/pt_BR'

import styles from './perfilPage.module.css'

export default function PerfilPage() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <Profile
                    name={faker.person.fullName()}
                    age={faker.number.int({min: 18, max: 30})}
                    image={faker.image.urlPicsumPhotos()}
                    grade={`${faker.number.int({min: 2, max: 8})}° Período`}
                    course={'Ciência da Computação'}
                />
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.skills}>
                    <Skills/>
                </div>
    
                <div className={styles.schedule}>
                    <Schedule/>
                </div>
    
                <section className={styles.bio}>
                    <h3>Bio</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Earum corrupti non ea impedit eligendi laborum, unde quia
                        doloribus quisquam pariatur incidunt, ducimus tempora sed,
                        ab nulla iste optio rem! Ab iure amet pariatur, nam quasi,
                        inventore error architecto magni, in corporis dolorem ea
                        iste. Exercitationem aliquam vitae ab. Culpa, optio?
                    </p>
                </section>
            </div>
        </div>
    );
}