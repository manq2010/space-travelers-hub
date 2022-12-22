import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
// Import joinMission, leaveMission reducers:
import {
  joinMission, leaveMission, fetchMissions, showMoreDiscription,
} from './missionSlice';

const MissionWrapper = styled.div`

padding: 1rem;

`;

const MissionUL = styled.ul`
margin: 0 2rem 0 1rem;

`;

const MissionList = styled.li`
list-style: none;
display: grid;
grid-template-columns: 150px 2fr 150px 100px;
margin: 0;
font-family: 'Montserrat', sans-serif;
`;

const Header = styled.h4`
display: flex;
justify-content: space-between;
align-items: center;
`;

const MissionName = styled(Header)`

`;

const HeaderDescription = styled(Header)`
display: flex;
flex-direction: column;
`;

const InnerDescription = styled.span`
display: flex;
flex-direction: column;
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
border-right: 2px solid gray;
width: 10rem;
`;

const ButtonMember = styled.button`
text-transform: uppercase;
background-color: rgb(4, 118, 248);
color: #fff;
border: none;
border-radius: 0.3rem;
`;

const ButtonInactive = styled(ButtonMember)`
background-color: rgb(148, 148, 148);
`;


const ButtonLeave = styled.button`
background-color: #fff;
border: 1px solid rgb(148, 148, 148);
border-radius: 0.2rem;
padding: 0.5rem;
`;

const ButtonJoin = styled(ButtonLeave)`
border: 1px solid rgb(255, 100, 100);
color: red;
`;

const MissionDescription = styled.p`
border-left: 2px solid gray;
padding: 0 10px 0 10px;
font-size: 15px;
display: flex;
border-right: 2px solid gray;
`;

const MoreLessButton = styled.button`
padding: 0.1rem 0.4rem 0.1rem 0.4rem;
background-color: #fff;
color: black;
border: 1px solid black;
border-radius: 0.2rem;
`;

const Mission = () => {
  // Get missions from Redux store:
  const missions = useSelector((state) => state.missionReducer.missions);
  const missionsStatus = useSelector((state) => state.missionReducer.status);

  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionsStatus === 'idle') {
      dispatch(fetchMissions());
    }
  }, [missionsStatus, dispatch]);

  return (
    <MissionWrapper>

      <MissionUL>
        <MissionList>
          <MissionName>Mission</MissionName>
          <HeaderDescription>Description</HeaderDescription>
          <Header>Status</Header>
          <Header />
        </MissionList>
        {
            missions.map((mission) => (
              <MissionList key={mission.mission_id}>
                <MissionName>
                  {mission.mission_name}
                </MissionName>
                <MissionDescription>
                  {mission.toogleShow ? (
                    <InnerDescription>
                      <span>
                        {mission.description.substring(0, 200)}
                        ...
                      </span>
                      <span>
                        <MoreLessButton
                          type="button"
                          onClick={() => {
                            dispatch(showMoreDiscription(mission.mission_id));
                          }}
                        >
                          More

                        </MoreLessButton>
                      </span>
                    </InnerDescription>
                  ) : (
                    <InnerDescription>
                      <span>
                        {mission.description}
                      </span>
                      <span>
                        <MoreLessButton
                          type="button"
                          onClick={() => {
                            dispatch(showMoreDiscription(mission.mission_id));
                          }}
                        >
                          Less

                        </MoreLessButton>
                      </span>
                    </InnerDescription>
                  )}

                </MissionDescription>
                <StatusBtnContainer>
                  {
                    mission.reserved ? (
                      <ButtonMember type="button" > 
                        Active Member
                      </ButtonMember>
                    ) : (
                      <ButtonInactive
                        type="button"
                      >
                        Not a Member
                      </ButtonInactive>
                    )
                  }
                </StatusBtnContainer>
                <StatusBtnContainer>
                  {
                    mission.reserved ? (

                      <ButtonJoin
                        type="button"
                        className='leave_button'
                        onClick={() => {
                          dispatch(leaveMission(mission.mission_id));
                        }}
                      >
                        Leave Mission

                      </ButtonJoin>
                    ) : (
                      <ButtonLeave
                        type="button"
                        onClick={() => {
                          dispatch(joinMission(mission.mission_id));
                        }}
                      >
                        Join Mission
                      </ButtonLeave>
                    )
                  }
                </StatusBtnContainer>
              </MissionList>
            ))
        }
      </MissionUL>

    </MissionWrapper>
  );
};

export default memo(Mission);
