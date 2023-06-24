import Dashboard from '@/components/Dashboard'
import SearchBar from '@/components/SearchBar'
import Backwards from '@/components/Backwards'
import GroupCard from '@/components/inscricao/GroupCard'

import { data } from '@/types/Groups'

import styles from './divisionPage.module.css'

export default function Page({ params }: { params: { division: string } }) {
    return (
        <div className={styles.container}>
            <Backwards align='center' link='/inscricao'/>
            <SearchBar search='group'/>
            <Dashboard title='Grupos da Mentoria'>
                {
                    data.map((item: any, index: number) => <GroupCard
                                                key={index}
                                                id={item.id}
                                                mentores={item.mentores}
                                                mentorado={item.mentorado}
                                                division={params.division}
                                            />
                    )
                }
            </Dashboard>
        </div>
    );  
}