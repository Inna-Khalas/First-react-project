import s from "./Options.module.css"

export default function OptionBtn({ onClick, onReset, totalFeedback }) {
    const options = ["good", "neutral", "bad"];

    return (
        <div className={s.optionContainer}>
            {options.map((option) => (
                <button key={option} className={s.optionBtn} onClick={() => onClick(option)}>
                    {option}
                </button>
            ))}
            {totalFeedback > 0 && (
                <>
                    <button onClick={onReset} className={s.optionBtn}>reset</button>
                </>
            )}
        </div>
    );
}














