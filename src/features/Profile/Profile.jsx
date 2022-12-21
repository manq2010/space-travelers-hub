import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missionReducer);

  const joinedMission = missions.filter((mission) => mission.reseverd === true);
  return (
    <div>
      <div className="mission-profile">
        <h2>My Missions</h2>
        {
            joinedMission.map((mission) => (
              <div key={mission.mission_id}>
                {mission.mission_name}
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Profile;
