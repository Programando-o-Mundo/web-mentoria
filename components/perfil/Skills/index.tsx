'use client'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { useRef, useState } from 'react'

import styles from './skills.module.css'

export default function Skills() {
    const id = useRef(0);

    const [skills, setSkills] = useState([
        { id: 0, name: '', range: 80 },
    ]);

    return (
        <section className={`${styles.container} ${styles.hidden}`}
            onMouseEnter={(e) => e.currentTarget?.classList.remove(styles.hidden)}
            onMouseLeave={(e) => e.currentTarget?.classList.add(styles.hidden)}
        >
            <div className={styles.skillsContainer}>
                {
                    skills.map((skill) => {
                        return (
                            <div key={skill.id} className={styles.skillContainer}>
                                <div className={styles.skill}>
                                    <input type='text' value={skill.name} placeholder='Subject...' onChange={(e) => {
                                        setSkills(skills.map((s) => {
                                            if(s.id === skill.id) {
                                                return {...s, name: e.currentTarget.value};
                                            }
                                            return s;
                                        }));
                                        console.log(skills)
                                    }}/>
                                    <input type='range' name={skill.name} min='0' max='100' value={skill.range} onChange={(e) => {
                                        setSkills(skills.map((s) => {
                                            if(s.id === skill.id) {
                                                return {...s, range: parseInt(e.currentTarget.value)};
                                            }
                                            return s;
                                        }));
                                    }}/>
                                    <div className={`${styles.buttonContainer} ${styles.remove}`}>
                                        <button type='button' className={styles.button} onClick={() => {
                                            setSkills(skills.filter((s) => s.id !== skill.id));
                                        }}>
                                            <BiMinus className={styles.buttonIcon} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                <div className={`${styles.buttonContainer} ${styles.add}`}>
                    <button type='button' className={styles.button} onClick={() => {
                        id.current++;
                        setSkills([...skills, { id: id.current, name: '', range: 80 }]);
                    }}>
                        <BiPlus className={styles.buttonIcon}/>
                    </button>
                </div>
            </div>
        </section>
    );
}