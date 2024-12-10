
export default function UpdateFeedback({ feedBack }) {
    return (
        <ul>
            <li>Good: {feedBack.good}</li>
            <li>Neutral: {feedBack.neutral}</li>
            <li>Bad: {feedBack.bad}</li>
        </ul>
    );
}
