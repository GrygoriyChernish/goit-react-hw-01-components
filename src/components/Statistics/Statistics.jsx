import PropTypes, { shape } from 'prop-types';

import Section from '../Section/Section';
import Container from '../Container/Container';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <Section>
      <Container>
        <div className={s.stats}>
          {title && <h2 className={s.title}>{title}</h2>}
          <ul className={s.statList}>
            {stats.map(({ id, label, percentage }) => (
              <li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
