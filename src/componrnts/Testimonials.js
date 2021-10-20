import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styles from './Testimonials.module.css';
const Testimonials = () => {
    const [divState, setDivState] = useState({
        divs: [{
            speech: 'TEN was my first ever experience into internship. Even though I did not have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.',
            saidBy: '-Anjali Srivastava, Content Intern'
        },
        {
            speech: 'Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!',
            saidBy: '-Aakriti Malik, DM Intern'
        },
        {
            speech: 'Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.',
            saidBy: '-Harsh Rajput, General Management Intern'
        },
        {
            speech: 'I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.',
            saidBy: '-Kshema Unni, Business Development Intern'
        }
        ],
        idx: 0
    });
    const nextBtnChangeHandler = () => {
        setDivState({
            ...divState,
            idx: divState.idx < 3 ? divState.idx + 1 : 0
        })
    }
    const prevBtnChangeHandler = () => {
        setDivState({
            ...divState,
            idx: divState.idx > 0 ? divState.idx - 1 : 3
        })
    }
    return (
        <React.Fragment>
            <div className={styles.heading}>
                Testimonials
            </div>
            <div className={styles.outerDiv}>
                <div className={styles.person}>
                    <button className={styles.button} onClick={prevBtnChangeHandler}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <div className={styles.info}>
                        <div className={styles.speech}>{divState.divs[divState.idx].speech}</div>
                        <div className={styles.saidBy}>{divState.divs[divState.idx].saidBy}</div>
                    </div>
                    <button className={styles.button} onClick={nextBtnChangeHandler}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Testimonials;