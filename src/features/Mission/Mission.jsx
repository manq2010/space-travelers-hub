import React from 'react';
import { useSelector } from 'react-redux';
// Import membership reducer:
import styled from 'styled-components';
import { membership } from './missionSlice';

const MissionWrapper = styled.div`

`;

const MissionList = styled.li`
list-style: none;
display: grid;
grid-template-columns: 1fr 2fr 1fr 1fr;
margin: 0;
border: 1px solid gray;
`;

const Header = styled.h4`
display: flex;
justify-content: space-between;
align-items: center;
`;

const MissionName = styled(Header)`

`;

const StatusButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StatusBtnContainer = styled(StatusButton)`
display: flex;
justify-content: center;
align-items: center;
`;

const ButtonMember = styled.button`
text-transform: uppercase;
`;

const ButtonJoin = styled.button`

`;

const MissionDescription = styled.p`
display: flex;
`;

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
    <MissionWrapper>

      <ul>
        <MissionList>
          <MissionName>Mission</MissionName>
          <Header>Description</Header>
          <Header>Status</Header>
          <Header />
        </MissionList>
        {
            missions.map((mission) => (
              <MissionList key={mission.mission_id}>
                <MissionName>
                  {mission.mission_name}
                </MissionName>
                <MissionDescription>{mission.description.substring(0, 200)}</MissionDescription>
                <StatusBtnContainer>
                  <ButtonMember type="button">Not a Member</ButtonMember>
                </StatusBtnContainer>
                <StatusBtnContainer>
                  <ButtonJoin type="button">Join Mission</ButtonJoin>
                </StatusBtnContainer>
              </MissionList>
            ))
        }
      </ul>

    </MissionWrapper>
  );
};

export default Mission;
