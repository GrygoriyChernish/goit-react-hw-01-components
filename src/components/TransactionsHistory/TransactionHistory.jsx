import PropTypes, { shape } from 'prop-types';

import Section from '../Section/Section';
import Container from '../Container/Container';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <Section>
      <Container>
        <table className={s.transactionHistory}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Section>
  );
}

TransactionHistory.proTypes = {
  items: PropTypes.arrayOf(
    shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
