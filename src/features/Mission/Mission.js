import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import membership reducer:
import styled from 'styled-components';
import { joinMission, leaveMission, fetchMissions } from './missionSlice';

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
  const { missions } = useSelector((state) => state.missionReducer);
  const [showMore, SetShowMore] = useState(true);

  // console.log(isMember);
  // console.log(membership);
  // // console.log(filterMembership);
  // console.log(status);

  const dispatch = useDispatch();

  // const dispatch = useDispatch();
  // dispatch.dispatch(filterMembership('9D1B7E0'));

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchMissions());
  //   }
  // }, [status, dispatch]);

  // if (missions.discription.length >= 200) {
  //   content = missions.discription.substring(0, 200);
  // } else {
  //   content = missions.discription;
  // }

  return (
    <MissionWrapper>

      <MissionUL>
        <MissionList>
          <MissionName>Mission</MissionName>
          <HeaderDescription>
            <span>
              Description
            </span>
            <span>
              {
              showMore ? (
                <button type="button" onClick={() => SetShowMore(!showMore)}>showMore</button>
              ) : (
                <button type="button" onClick={() => SetShowMore(!showMore)}>showLess</button>
              )
            }
            </span>
          </HeaderDescription>
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
                  {showMore ? (
                    <InnerDescription>
                      {mission.description.substring(0, 100)}
                      ...
                    </InnerDescription>
                  ) : (
                    <InnerDescription>
                      {mission.description}
                    </InnerDescription>
                  )}

                </MissionDescription>
                <StatusBtnContainer>
                  {
                    mission.reserved ? (
                      <ButtonMember type="button">Not a Member</ButtonMember>
                    ) : (
                      <ButtonMember
                        type="button"
                        onClick={() => {
                          dispatch(leaveMission(mission.mission_id));
                        }}
                      >
                        Active Member
                      </ButtonMember>
                    )
                  }
                </StatusBtnContainer>
                <StatusBtnContainer>
                  {
                    mission.reserved ? (

                      <ButtonJoin type="button">Leave Mission</ButtonJoin>
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

export default Mission;
