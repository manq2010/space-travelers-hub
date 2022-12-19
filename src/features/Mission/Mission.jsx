import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from './missionSlice';

const Mission = () => {
  const { isMember, missions, status } = useSelector((state) => state.missionReducer);

  console.log(isMember);
  console.log(missions);
  console.log(status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>

      <ul>
        <li>
          <h4>Mission</h4>
          <h4>Description</h4>
          <h4>Status</h4>
          <></>
        </li>
        {
            missions.map((mission) => (
              <li key={mission.mission_id}>
                <h4>
                  {mission.mission_name}
                </h4>
                <p>{mission.description}</p>
                <button type="button">Not a Member</button>
                <button type="button">Join Mission</button>
              </li>
            ))
        }
      </ul>

    </div>
  );
};

export default Mission;
