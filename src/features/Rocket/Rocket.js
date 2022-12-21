import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from './RocketSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  // console.log(rockets);

  const dispatch = useDispatch();

  dispatch(fetchRocket());

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.flickrImages} alt="rocket" />
          <div>
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
            <button type="button">Reserve</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
