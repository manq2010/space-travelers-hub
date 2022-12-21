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
// border: 1px solid gray;

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
`;

const ButtonMember = styled.button`
text-transform: uppercase;
`;

const ButtonJoin = styled.button`

`;

const MissionDescription = styled.p`
border-left: 2px solid gray;
padding: 0 10px 0 10px;
font-size: 12px;
display: flex;
border-right: 2px solid gray;
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
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(showMoreDiscription(mission.mission_id));
                          }}
                        >
                          showMore

                        </button>
                      </span>
                    </InnerDescription>
                  ) : (
                    <InnerDescription>
                      <span>
                        {mission.description}
                      </span>
                      <span>
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(showMoreDiscription(mission.mission_id));
                          }}
                        >
                          showLess

                        </button>
                      </span>
                    </InnerDescription>
                  )}

                </MissionDescription>
                <StatusBtnContainer>
                  {
                    mission.reserved ? (
                      <ButtonMember type="button">
                        Active Member
                      </ButtonMember>
                    ) : (
                      <ButtonMember
                        type="button"
                      >
                        Not a Member
                      </ButtonMember>
                    )
                  }
                </StatusBtnContainer>
                <StatusBtnContainer>
                  {
                    mission.reserved ? (

                      <ButtonJoin
                        type="button"
                        onClick={() => {
                          dispatch(leaveMission(mission.mission_id));
                        }}
                      >
                        Leave Mission

                      </ButtonJoin>
                    ) : (
                      <ButtonJoin
                        type="button"
                        onClick={() => {
                          dispatch(joinMission(mission.mission_id));
                        }}
                      >
                        Join Mission
                      </ButtonJoin>
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
