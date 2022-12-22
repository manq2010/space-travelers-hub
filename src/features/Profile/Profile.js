import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { leaveMission } from '../Mission/missionSlice';
import { cancelRocket } from '../Rocket/RocketSlice';

const ProfileContainer = styled.div`
display: flex;
padding: 1rem;
justify-content: space-around;
`;

const ProfileCard = styled.div`
font-family: 'Montserrat', sans-serif;
`;

const ProfileCardDetails = styled.div`
border-radius: 6px;
border 1px solid gray;
min-width: 20rem;
`;

const JoinedItem = styled.div`
border-bottom: 1px solid gray;
padding: 0 0.5rem 0.5rem 0.5rem;
display: flex;
justify-content: space-between;
align-items: center;
gap: 0.5rem;
`;
const ButtonLeave = styled.button`
font-family: 'Montserrat', sans-serif;
width: fit-content;
font-size: 0.8rem;
padding: 0.6rem 1rem 0.6rem 1rem;
border-radius: 0.3rem;
border: 1px solid black;
background-color: #fff;
color: black;
`;

const ReadMore = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const MissionName = styled.h4`
font-family: 'Montserrat', sans-serif;
font-size: 1rem;
`;

const ReadMoreButton = styled.button`
font-family: 'Montserrat', sans-serif;
width: fit-content;
font-size: 0.8rem;
padding: 0.6rem 1rem 0.6rem 1rem;
border-radius: 0.3rem;
border: none;
background-color: rgb(4, 118, 248);
color: #fff;
`;

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const rockets = useSelector((state) => state.rocketReducer);

  const dispatch = useDispatch();

  const joinedMission = missions.filter((mission) => mission.reserved === true);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved === true);

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  let missionContent = false;
  if (joinedMission.length === 0) {
    missionContent = true;
  }

  let rocketContent = false;
  if (reservedRocket.length === 0) {
    rocketContent = true;
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
                <ReadMore>
                  <div>
                    <MissionName>
                      {mission.mission_name}
                    </MissionName>
                  </div>
                  <div>
                    <ReadMoreButton
                      type="button"
                      role="link"
                      onClick={() => openInNewTab(mission.wikipedia)}
                    >
                      Read More
                    </ReadMoreButton>
                  </div>

                </ReadMore>
                <div>
                  <ButtonLeave
                    type="button"
                    onClick={() => {
                      dispatch(leaveMission(mission.mission_id));
                    }}
                  >
                    Leave Mission
                  </ButtonLeave>
                </div>
              </JoinedItem>
            ))
        }
        </ProfileCardDetails>
      </ProfileCard>
      <ProfileCard>
        <h2>My Rockets</h2>
        {
          rocketContent ? (<h3>no rockets reserved</h3>) : ('')
        }
        <ProfileCardDetails>
          {reservedRocket.map((rocket) => (
            <JoinedItem key={rocket.id}>
              <ReadMore>
                <div>
                  <MissionName className="mission_name">{rocket.name}</MissionName>
                </div>
                <div>
                  <ReadMoreButton
                    type="button"
                    role="link"
                    onClick={() => openInNewTab(rocket.wikipedia)}
                  >
                    Read More
                  </ReadMoreButton>
                </div>
              </ReadMore>
              <div>
                <ButtonLeave
                  type="button"
                  onClick={() => {
                    dispatch(cancelRocket(rocket.id));
                  }}
                >
                  Cancel Rocket
                </ButtonLeave>
              </div>
            </JoinedItem>
          ))}
        </ProfileCardDetails>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
