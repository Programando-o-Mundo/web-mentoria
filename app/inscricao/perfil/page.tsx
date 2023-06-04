
import Schedule from '@/components/perfil/Schedule'

import styles from './perfilPage.module.css'

export default function PerfilPage() {
    return (
        <div className={styles.container}>
            {/* <Profile
                name={faker.person.fullName()}
                age={faker.number.int({min: 18, max: 30})}
                image={faker.image.urlPicsumPhotos()}
                grade={`${faker.number.int({min: 2, max: 8})}° Período`}
                course={'Ciência da Computação'}
            /> */}
            <Schedule/>
            {/* <section className={styles.bioContainer}>
                <h3>Bio</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Earum corrupti non ea impedit eligendi laborum, unde quia 
                    doloribus quisquam pariatur incidunt, ducimus tempora sed, 
                    ab nulla iste optio rem! Ab iure amet pariatur, nam quasi, 
                    inventore error architecto magni, in corporis dolorem ea 
                    iste. Exercitationem aliquam vitae ab. Culpa, optio?
                </p>
            </section> */}
        </div>
    );
}