import s from "./Feedback.module.css"
export default function UpdateFeedback({ feedBack, positiveFeedback, totalFeedback }) {

    return (
        <div className={s.feedBackContainer}>
            <ul className={s.updateFeedback}>
                <li>Good: <span className={s.number}>{feedBack.good}</span></li>
                <li>Neutral: <span className={s.number}>{feedBack.neutral}</span></li>
                <li>Bad: <span className={s.number}>{feedBack.bad}</span></li>
            </ul>
            <div className={s.totalFeedback}>
                <p>Total Feedback: <span className={s.number}>{totalFeedback}</span></p>
                <p>Positive Feedback: <span className={s.number}>{positiveFeedback}</span>%</p>
            </div>
        </div>
    );
}
