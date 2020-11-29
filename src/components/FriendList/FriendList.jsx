import PropTypes, { shape } from 'prop-types';

import Section from '../Section/Section';
import Container from '../Container/Container';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <Section>
      <Container>
        <ul className="friend-list">
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
