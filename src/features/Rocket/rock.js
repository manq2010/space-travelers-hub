import PropTypes from 'prop-types';

function Rocket({
  name, description, image, reservedRocket, cancelRocket, reserved,
}) {
  return (
    <div>
      <img src={image} alt="rocket" />
      <div>
        <h1>{name}</h1>
        <p>
          {reserved && <span>Reserved</span>}
          {' '}
          {description}
        </p>
        {!reserved && (
          <button type="button" onClick={reservedRocket}>
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button type="button" onClick={cancelRocket}>
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
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
