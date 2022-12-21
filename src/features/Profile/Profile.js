import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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
`;

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer.missions);

  const joinedMission = missions.filter((mission) => mission.reserved === true);

  return (
    <ProfileContainer>
      <ProfileCard>
        <h2>My Missions</h2>
        <ProfileCardDetails>
          {
            joinedMission.map((mission) => (
              <JoinedItem key={mission.mission_id}>
                {mission.mission_name}
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
