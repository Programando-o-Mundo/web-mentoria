import styles from './telegramSection.module.css'

import {MentoryDivision, CampusNames, CourseNames, RoutineNames} from '@/types/UCLNTypes'
import Link from 'next/link'

const data = [
    {
        div: new MentoryDivision(CourseNames.CC, 
                        CampusNames.Coreu, 
                        RoutineNames.MATUTINO),
        link: 'https://t.me/UCLN_CC_CE_M_2023_1'
    },
    { 
        div: new MentoryDivision(CourseNames.CC,
                        CampusNames.Praca,
                        RoutineNames.MATUTINO),
        link: 'https://t.me/+1_Hl8SBjGEU0OWI5'
    },
    {
        div: new MentoryDivision(CourseNames.CC,
                        CampusNames.Coreu,
                        RoutineNames.VESPERTINO),
        link: 'https://t.me/+2zqEu3gp7cZhNGYx'
    },
    {
        div: new MentoryDivision(CourseNames.EC,
                        CampusNames.Coreu,
                        RoutineNames.NOTURNO),
        link: 'https://t.me/+SNpZUPCqnCJkZDg5'
    }
];

interface ChannelProps {
    title: string;
    routine: string;
    campus: string;
    link: string;
    courseIcon: React.ReactNode;
}

function Channel(props: ChannelProps) {
    return (
        <article className={styles.channel}>
            <Link href={props.link} className={styles.channelLink}>
                <div className={styles.channelIcon}>
                    {props.courseIcon}
                </div>
                <div className={styles.channelContent}>
                    <h3 className={styles.channelTitle}>
                        {props.title}
                    </h3>
                    <p>{props.routine}</p>
                    <p>{props.campus}</p>
                </div>
            </Link>
        </article>
    );
}

export default function TelegramSection() {
    return (
        <section className={styles.container}>
            {data.map((item: {div: MentoryDivision, link: string}) => <Channel
                                                                              key={item.div.course}
                                                                              title={item.div.course}
                                                                              link={item.link}
                                                                              courseIcon={item.div.courseIcon}
                                                                              routine={item.div.routine}
                                                                              campus={item.div.campus}
                                                                      />
            )}
        </section>
    );
}

