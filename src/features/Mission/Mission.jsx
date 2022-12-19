import React from 'react';
import { useSelector } from 'react-redux';

const Mission = () => {
  const mission = useSelector((state) => state.missionReducer);
  //   console.log(addMission);
  console.log(mission);

  return (
    <div>

      <ul>
        <li>
          <h4>Mission</h4>
          <h4>Description</h4>
          <h4>Status</h4>
          <></>
        </li>
        <li>
          <h4>Mission</h4>
          <h4>Description</h4>
          <h4>Status</h4>
          <></>
        </li>
      </ul>

    </div>
  );
};

export default Mission;
