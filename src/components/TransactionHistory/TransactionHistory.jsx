import './TransactionHistory.css';

export default function TransactionHistory({ transactions }) {
    console.log(transactions);

    return (
        <table className="transaction-history">
            <thead className="transaction-history-color">
                <tr>
                    <th className="transaction-history-cell">Type</th>
                    <th className="transaction-history-cell">Amount</th>
                    <th className="transaction-history-cell">Currency</th>
                </tr>
            </thead>
            <tbody className="transaction-history-body">
                {transactions.map(transaction => (
                    <tr key={transaction.id} className="transaction-history-row">
                        <td className="transaction-history-data">{transaction.type}</td>
                        <td className="transaction-history-data">{transaction.amount}</td>
                        <td className="transaction-history-data">{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

