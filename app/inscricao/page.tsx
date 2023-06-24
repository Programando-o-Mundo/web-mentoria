import SearchBar from '@/components/SearchBar'
import Dashboard from '@/components/Dashboard'
import DivisionCard from '@/components/inscricao/DivisionCard'
import { FormEvent } from 'react'

import styles from './inscricaoPage.module.css'

import { CampusNames, CourseNames, MentoryDivision, RoutineNames } from '@/types/UCLNTypes'

const data = [
    new MentoryDivision(CourseNames.CC, 
                        CampusNames.Coreu, 
                        RoutineNames.MATUTINO),
    new MentoryDivision(CourseNames.EC,
                        CampusNames.Coreu,
                        RoutineNames.VESPERTINO),
    new MentoryDivision(CourseNames.CC,
                        CampusNames.Praca,
                        RoutineNames.MATUTINO),
    new MentoryDivision(CourseNames.EC,
                        CampusNames.Coreu,
                        RoutineNames.NOTURNO),
    new MentoryDivision(CourseNames.ES,
                        CampusNames.Coreu,
                        RoutineNames.MATUTINO)
];

export default function inscricao() {
    return (
        <div className={styles.container}>
            <SearchBar search='division'/>
            <Dashboard title='UCLN - Tecnologia da Informação (TI)'>
                {data.map((item: MentoryDivision, index: number) => <DivisionCard 
                                                        key={index}
                                                        courseName={item.course}
                                                        campusName={item.campus}
                                                        routineName={item.routine}
                                                        courseIcon={item.courseIcon}
                                                        routineIcon={item.routineIcon}
                                                        courseAbreviation={item.courseAbreviation}
                                                    />)}
            </Dashboard>
        </div>
    );
}