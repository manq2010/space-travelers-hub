import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { reserveRocket, cancelRocket, fetchRocket } from './RocketSlice';
import Rocket from './rock';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  const handleReservedRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelRocket = (id) => {
    dispatch(cancelRocket(id));
  };

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.flickr_images}
          reserved={rocket.reserved}
          reservedRocket={() => handleReservedRocket(rocket.id)}
          cancelRocket={() => handleCancelRocket(rocket.id)}
        />
      ))}
    </div>
  );
};

export default Rockets;
