import HorizontalScroll from '@/components/HorizontalScroll'
import Mentor from '@/components/mentorygroup/Mentor'
import Student from '@/components/mentorygroup/Student'
import Subscription from '@/components/mentorygroup/Subscription'
import Card from '@/components/Card'

import styles from './idPage.module.css'

import { faker } from '@faker-js/faker/locale/pt_BR'

export default function idPage() {
    const students = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
        return {
            name: faker.person.fullName(),
            image: faker.image.urlPicsumPhotos()
        }
    });
    const numbers = [1259, 2849, 3105, 4649, 5709, 6389, 7059, 8928, 9094, 1023, 1153, 1275, 1386, 1498, 1523];

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <section className={styles.mentorsContainer}>
                    <Mentor 
                        image={faker.image.urlPicsumPhotos()} 
                        grade='X° Período' 
                        name={faker.person.fullName()}  
                    />
                    <Mentor 
                        image={faker.image.urlPicsumPhotos()} 
                        grade='X° Período' 
                        name={faker.person.fullName()}  
                    />
                </section>
                <section className={styles.groupTreeContainer}>
                    <h3>Alunos</h3>
                    <div className={styles.treeContainer}>
                        { students.map((student, index) => <Student
                                                                key={student.name}
                                                                name={student.name}
                                                                image={student.image}
                                                            />
                        )}
                    </div>
                </section>
            </div>

            <div className={styles.rightContainer}>
                <div className={styles.horizontalScrollContainer}>
                    <h3>Relatórios Semanais</h3>
                    <HorizontalScroll>
                        { numbers.map((item) => <Card
                                                    key={item}
                                                    className={styles.reportCard}
                                                    color='white'
                                                    link={`${'https://docs.google.com/document/d/1KhhjF4Y_Xhvji4xgfyOHxWBZQ-NK6E624eB0qIXqdTU/edit'}`}
                                                >
                                                    <h4 className={styles.reportTitle}>
                                                        <span>Relatório</span>
                                                        <time 
                                                            dateTime={`${'yyyt'}-${'mm'}-${'dd'} 00:00`} 
                                                            className={styles.reportDate}
                                                        >
                                                            dd/mm/yyyy
                                                        </time>    
                                                    </h4>
                                                    <p className={styles.reportDescription}>
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur aliquam error quo laborum exercitationem quam!
                                                    </p>
                                                </Card>
                        )}
                    </HorizontalScroll>
                </div>
                <Subscription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Quos fuga molestias est incidunt saepe porro
                    veniam. Ex delectus provident, eius aperiam
                    accusantium reiciendis similique ipsa, veniam quas
                    consequatur, magnam hic itaque laboriosam fugit quo
                    molestias. Modi itaque ex reiciendis quae asperiores
                    recusandae quos sed corporis autem expedita molestiae
                    ad neque, voluptate assumenda. Exercitationem
                    consectetur, facilis at eligendi vero expedita.
                </Subscription>
            </div>
        </div>
    );
}