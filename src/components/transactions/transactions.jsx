import PropTypes from 'prop-types';
import css from './transactions.module.css'
import classNames from 'classnames';

const Transactions = ({transactions})=>{
    return(<div className={css.section}><table className={css.transactionHistory}>
    <thead className={css.head}>
      <tr>
        <th className={css.head}>Type</th>
        <th className={css.head}>Amount</th>
        <th className={css.head}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
       {transactions.map(({id, type, amount, currency})=>(
      <tr key={id}>
        <td className={classNames(css.body, css.type)}>{type}</td>
        <td className={css.body}>{amount}</td>
        <td className={css.body}>{currency}</td>
      </tr>
     ))}
    </tbody>
  </table></div>)

}

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        }))}

export default Transactions;