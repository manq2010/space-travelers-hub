import PropTypes from 'prop-types';
import styled from 'styled-components';
import './rock.css';

const RocketsContainer = styled.li`
display: flex;
gap: 2rem;
height: 20rem;
margin: 3rem;
`;

function Rocket({
  name, description, image, reservedRocket, cancelRocket, reserved,
}) {
  return (
    <RocketsContainer>
      <img src={image} alt="rocket" className="rocket_image" />
      <div className="description_section">
        <h1 className="rocket_name">{name}</h1>
        <p className="rocket_description">
          {reserved && <span className="reserved_span">Reserved</span>}
          {' '}
          {description}
        </p>
        {!reserved && (
          <button type="button" onClick={reservedRocket} className="rocket_button reserve_button">
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button type="button" onClick={cancelRocket} className="rocket_button cancel_button">
            Cancel Reservation
          </button>
        )}
      </div>
    </RocketsContainer>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  reservedRocket: PropTypes.func.isRequired,
  cancelRocket: PropTypes.func.isRequired,
};

export default Rocket;
