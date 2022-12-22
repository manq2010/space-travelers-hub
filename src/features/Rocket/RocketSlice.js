import axios from 'axios';

const GET_ROCKET = 'GET_ROCKET';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

export const getRocket = (payload) => ({ type: GET_ROCKET, payload });
export const reserveRocket = (id) => ({ type: RESERVE_ROCKET, id });
export const cancelRocket = (id) => ({ type: CANCEL_ROCKET, id });

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocket = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const rockets = [];
  data.map((rocket) => (
    rockets.push({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      reserved: false,
      wikipedia: rocket.wikipedia,
    })
  ));
  dispatch(getRocket(rockets));
};

const rocketReducer = (state = [], action) => {
  if (action.type === GET_ROCKET) {
    return action.payload;
  }

  if (action.type === RESERVE_ROCKET) {
    const newState = state.map((rocket) => {
      if (rocket.id !== action.id) {
        return rocket;
      }
      return { ...rocket, reserved: true };
    });
    return newState;
  }

  if (action.type === CANCEL_ROCKET) {
    const newState = state.map((rocket) => {
      if (rocket.id !== action.id) {
        return rocket;
      }
      return { ...rocket, reserved: false };
    });
    return newState;
  }

  return state;
};

export default rocketReducer;
