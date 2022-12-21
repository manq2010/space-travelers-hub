import axios from 'axios';

const GET_ROCKET = 'spaceTravellerHub/rockets/GET_ROCKET';

export const getRocket = (payload) => ({ type: GET_ROCKET, payload });

const url = 'https://api.spacexdata.com/v3/';

export const fetchRocket = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const rockets = [];
  data.forEach((rocket) => {
    rockets.push({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
    });
  });
  dispatch(getRocket(rockets));
};

const rocketReducer = (state = [], action) => {
  if (action.type === GET_ROCKET) {
    return action.payload;
  }
  return state;
};

export default rocketReducer;
