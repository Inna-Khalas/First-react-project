
export default function OptionBtn({ onClick }) {
    const options = ["good", "neutral", "bad"];

    return (
        <div>
            {options.map(option => (
                <button key={option} onClick={() => onClick(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}
