'use client'
import TableData from './TableData'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { useRef, useState } from 'react'

import styles from './schedule.module.css'

export default function Schedule() {
    const id = useRef(0);

    const [rows, setRows] = useState([
        {id: id.current, mon: '', tue: '', wed: '', thu: '', fri: ''},
    ]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const idx = event.target.parentElement?.parentElement?.getAttribute('data-id');
        const id: number | null = idx ? parseInt(idx) : null;

        if(id !== null) {
            const { name, value } = event.target;
            setRows(rows.map((row) => {
                if(row.id === id) {
                    return {...row, [name]: value};
                }
                return row;
            }));
        }
    }

    return(
        <section className={styles.container}>
            <div className={`${styles.table} ${styles.hidden}`} 
                onMouseEnter={(e) => e.currentTarget?.classList.remove(styles.hidden)}
                onMouseLeave={(e) => e.currentTarget?.classList.add(styles.hidden)}
            >
                <table className={styles.tableHead}>
                    <thead>
                        <tr className={styles.weekDays}>
                            <th>Segunda</th>
                            <th>Terça</th>
                            <th>Quarta</th>
                            <th>Quinta</th>
                            <th>Sexta</th>
                        </tr>
                    </thead>
                </table>
                <table className={styles.tableBody}>
                    <tbody>
                        {
                            rows.map((row) => {
                                return (
                                    <tr data-id={row.id} key={row.id}>
                                        <TableData name='mon' value={row.mon} handleChange={handleChange}/>
                                        <TableData name='tue' value={row.tue} handleChange={handleChange}/>
                                        <TableData name='wed' value={row.wed} handleChange={handleChange}/>
                                        <TableData name='thu' value={row.thu} handleChange={handleChange}/>
                                        <TableData name='fri' value={row.fri} handleChange={handleChange}/>
                        
                                        <td className={`${styles.buttonContainer} ${styles.remove}`}>
                                            <button 
                                                type='button' 
                                                className={styles.button} 
                                                onClick={() => setRows(rows.filter((r) => r.id !== row.id))}
                                            >
                                                <BiMinus className={styles.buttonIcon}/>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                        <tr className={`${styles.buttonContainer} ${styles.add}`}>
                            <td>
                                <button
                                    type='button'
                                    className={styles.button}
                                    onClick={() => {
                                        id.current++;
                                        setRows([...rows, {id: id.current, mon: '', tue: '', wed: '', thu: '', fri: ''}])
                                    }}
                                >
                                    <BiPlus className={styles.buttonIcon}/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}