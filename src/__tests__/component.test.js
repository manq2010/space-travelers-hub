import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../features/Mission/Mission';
import AppRoutes from '../Routes';
import NotFound from '../features/NotFound/NotFound';
import MyProfilePage from '../pages/MyProfilePage';
import store from '../features/configureStore';
import Rocket from '../features/Rocket/rock';

// Routing test

describe('Navbar renders', () => {
  test('should redirect and update history', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <AppRoutes />
        </Router>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId(/Missions/));
    expect(history.location.pathname).toEqual('/missions');
  });

  test('should redirect and update dom', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId(/Missions/));
    expect(screen.getByText(/Description/)).toBeInTheDocument();
  });
});

describe('Not-found page is rendered', () => {
  test('Component is rendered', () => {
    render(
      <Provider store={store}>
        <NotFound />
      </Provider>,
    );
    const container = screen.getByText(/Oops Page/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <NotFound />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('HomePage component is rendererd', () => {
  test('Component is rendererd', () => {
    render(
      <Provider store={store}>
        <MyProfilePage />
      </Provider>,
    );
    const container = screen.getByText(/My Missions/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MyProfilePage />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Mission component is rendererd', () => {
  test('Component is rendererd', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    const container = screen.getByText(/Description/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Rockets component is rendererd', () => {
  test('Component is rendererd', () => {
    render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    const container = screen.getByText(/Reserve Rocket/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});