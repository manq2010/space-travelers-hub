import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { leaveMission } from '../Mission/missionSlice';

const ProfileContainer = styled.div`
display: flex;
padding: 1rem;
justify-content: space-around;
`;

const ProfileCard = styled.div`

`;

const ProfileCardDetails = styled.div`
border-radius: 6px;
border 1px solid gray;
`;

const JoinedItem = styled.div`
border-bottom: 1px solid gray;
padding: 1rem;
display: flex;
justify-content: space-between;
gap: 0.5rem;
`;
const ButtonLeaveMission = styled.button`

`;

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer.missions);

  const dispatch = useDispatch();

  const joinedMission = missions.filter((mission) => mission.reserved === true);

  let missionContent = false;

  if (joinedMission.length === 0) {
    missionContent = true;
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <h2>My Missions</h2>
        {
          missionContent ? (<h3>no missions joined</h3>) : ('')
        }
        <ProfileCardDetails>
          {
            joinedMission.map((mission) => (
              <JoinedItem key={mission.mission_id}>
                <div>
                  {mission.mission_name}
                </div>
                <div>
                  <ButtonLeaveMission
                    type="button"
                    onClick={() => {
                      dispatch(leaveMission(mission.mission_id));
                    }}
                  >
                    Leave Mission

                  </ButtonLeaveMission>
                </div>
              </JoinedItem>
            ))
        }
        </ProfileCardDetails>
      </ProfileCard>
      <ProfileCard>
        <h2>My Rockets</h2>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
