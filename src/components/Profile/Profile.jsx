import PropTypes from 'prop-types';

import Section from '../Section/Section';
import Container from '../Container/Container';
import s from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <Section>
      <Container>
        <div className={s.profile}>
          <div className={s.description}>
            <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
          </div>

          <ul className={s.stats}>
            <li>
              <span className={s.lable}>Followers</span>
              <span className="quantity">{stats.followers}</span>
            </li>
            <li>
              <span className={s.lable}>Views</span>
              <span className="quantity">{stats.views}</span>
            </li>
            <li>
              <span className={s.lable}>Likes</span>
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
