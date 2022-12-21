import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './features/configureStore';
// import { fetchMissions } from './features/Mission/missionSlice';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

// fetch all missions once
// store.dispatch(fetchMissions());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Add Redux provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
