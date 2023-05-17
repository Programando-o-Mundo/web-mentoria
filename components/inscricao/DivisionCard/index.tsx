'use client'

import React from 'react'
import Link from 'next/link'

import styles from './divisionCard.module.css'
import Card from '@/components/Card'

export default function DivisionCard(props: {
    courseName: string,
    campusName: string,
    routineName: string,
    courseAbreviation: string,
    courseIcon: React.ReactNode,
    routineIcon: React.ReactNode
}) {
    return (
        <Card link={`/inscricao/${props.courseAbreviation}`} height='150px' color='var(--light-blue)'>
            <div className={styles.cardContainer}>
                <div className={styles.cardTitleContainer}>
                    <h4 className={styles.cardTitle}>
                        {props.courseName}
                    </h4>
                    <p className={styles.cardCampusName}>{props.campusName}</p>
                </div>
                <div className={styles.cardContentContainer}>
                    <div className={styles.cardIcon} title={props.routineName}>
                        {props.routineIcon}
                    </div>
                    <div className={styles.cardIcon} title={props.courseName}>
                        {props.courseIcon}
                    </div>
                </div>
            </div>
        </Card>
    );
}
