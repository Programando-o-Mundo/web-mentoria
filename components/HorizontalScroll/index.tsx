'use client'

import { Component, ReactNode, createRef } from 'react';
import styles from './horizontalScroll.module.css'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

class HorScr extends Component<{ children: ReactNode }> {

    horizontalScrollRef = createRef<HTMLDivElement>();
    step: number = 175;

    componentDidMount() {
        this.horizontalScrollRef.current?.addEventListener('wheel', this.changeScrollDirection, false);
    }

    componentWillUnmount() {
        this.horizontalScrollRef.current?.removeEventListener('wheel', this.changeScrollDirection, false);
    }

    changeScrollDirection = (ev: any) => {
        if(ev.deltaY !== 0) {
            ev.preventDefault();
            ev.stopPropagation();
            ev.currentTarget.scrollLeft += ev.deltaY;
        }
    }

    scrollLeft = () => {
        this.horizontalScrollRef.current?.scroll({left: this.horizontalScrollRef.current.scrollLeft - this.step, behavior: 'smooth'});
    }

    scrollRight = () => {
        this.horizontalScrollRef.current?.scroll({left: this.horizontalScrollRef.current.scrollLeft + this.step, behavior: 'smooth'});
    }

    render(): ReactNode {
        return (
            <>
                <button type='button' className={styles.arrowButton} onClick={this.scrollLeft}>
                    <MdOutlineKeyboardArrowLeft className={styles.arrow}/>
                </button>
                <div ref={this.horizontalScrollRef} className={styles.horizontalScroll}>
                    {this.props.children}
                </div>
                <button type='button' className={styles.arrowButton} onClick={this.scrollRight}>
                    <MdOutlineKeyboardArrowRight className={styles.arrow}/>
                </button>
            </>
        );
    }
}

export default function HorizontalScroll(props: { children: ReactNode }) {
    return (
        <section className={styles.container}>
            <HorScr>
                {props.children}
            </HorScr>
        </section>
    );
}
