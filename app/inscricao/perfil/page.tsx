import Profile from '@/components/perfil/Profile'
import Schedule from '@/components/perfil/Schedule'
import Skills from '@/components/perfil/Skills'
import SocialMedia from '@/components/perfil/SocialMedias'

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
    
                <section className={styles.socialMedia}>
                    <SocialMedia/>
                </section>
            </div>
        </div>
    );
}