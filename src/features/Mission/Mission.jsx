import React from 'react';
import { useSelector } from 'react-redux';
// Import membership reducer:
import { membership } from './missionSlice';

const Mission = () => {
  const { isMember, missions, status } = useSelector((state) => state.missionReducer);

  console.log(isMember);
  console.log(membership);
  console.log(status);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchMissions());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     if (status === 'idle') {
  //       dispatch(fetchMissions());
  //     }
  //   }, [status, dispatch]);

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
                <p>{mission.description.substring(0, 100)}</p>
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
