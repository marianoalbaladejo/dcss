import {
  fetchImplementation,
  mounter,
  reduxer,
  snapshot,
  state
} from '../bootstrap';
import { unmountComponentAtNode } from 'react-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ScenariosList from '../../components/ScenariosList/index.jsx';

import {
  GET_COHORT_SUCCESS,
  GET_SCENARIOS_COUNT_SUCCESS,
  GET_SCENARIOS_SUCCESS,
  GET_USER_SUCCESS,
  GET_USERS_SUCCESS
} from '../../actions/types';
import * as cohortActions from '../../actions/cohort';
import * as scenarioActions from '../../actions/scenario';
import * as userActions from '../../actions/user';
import * as usersActions from '../../actions/users';
jest.mock('../../actions/cohort');
jest.mock('../../actions/scenario');
jest.mock('../../actions/user');
jest.mock('../../actions/users');

beforeAll(() => {
  (window || global).fetch = jest.fn();
});

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  container.setAttribute('id', 'root');
  document.body.appendChild(container);

  fetchImplementation(fetch);

  cohortActions.getCohort = jest.fn();
  cohortActions.getCohort.mockImplementation(() => async dispatch => {
    const cohort = {
      id: 2,
      created_at: '2020-08-31T14:01:08.656Z',
      name: 'A New Cohort That Exists Within Inline Props',
      runs: [],
      scenarios: [],
      users: [
        {
          id: 2,
          email: 'owner@email.com',
          username: 'owner',
          cohort_id: 2,
          roles: ['owner', 'facilitator'],
          is_anonymous: false,
          is_owner: true
        }
      ],
      roles: ['owner', 'facilitator'],
      usersById: {
        2: {
          id: 2,
          email: 'owner@email.com',
          username: 'owner',
          cohort_id: 2,
          roles: ['owner', 'facilitator'],
          is_anonymous: false,
          is_owner: true
        }
      }
    };
    dispatch({
      type: GET_COHORT_SUCCESS,
      cohort
    });
    return cohort;
  });
  scenarioActions.getScenariosCount = jest.fn();
  scenarioActions.getScenariosCount.mockImplementation(() => async dispatch => {
    const count = 1;
    dispatch({
      type: GET_SCENARIOS_COUNT_SUCCESS,
      count
    });
    return count;
  });

  scenarioActions.getScenariosSlice = jest.fn();
  scenarioActions.getScenariosSlice.mockImplementation(() => async dispatch => {
    const scenarios = [
      {
        author: {
          id: 2,
          username: 'owner',
          personalname: 'Owner Account',
          email: 'owner@email.com',
          is_anonymous: false,
          roles: ['participant', 'super_admin', 'facilitator', 'researcher'],
          is_super: true
        },
        categories: [],
        consent: {
          id: 57,
          prose: ''
        },
        description: 'A Multiplayer Scenario',
        finish: {
          id: 1,
          title: '',
          components: [
            {
              html: '<h2>Thanks for participating!</h2>',
              type: 'Text'
            }
          ],
          is_finish: true
        },
        lock: {
          scenario_id: 42,
          user_id: 2,
          created_at: '2020-10-10T23:54:19.934Z',
          ended_at: null
        },
        slides: [
          {
            id: 1,
            title: '',
            components: [
              {
                html: '<h2>Thanks for participating!</h2>',
                type: 'Text'
              }
            ],
            is_finish: true
          },
          {
            id: 2,
            title: '',
            components: [
              {
                id: 'b7e7a3f1-eb4e-4afa-8569-eb6677358c9e',
                html: '<p>paragraph</p>',
                type: 'Text'
              },
              {
                id: 'aede9380-c7a3-4ef7-add7-838fd5ec854f',
                type: 'TextResponse',
                header: 'TextResponse-1',
                prompt: ',timeout: 0,recallId: ',
                required: true,
                responseId: 'be99fe9b-fa0d-4ab7-8541-1bfd1ef0bf11',
                placeholder: 'Your response'
              },
              {
                id: 'f96ac6de-ac6b-4e06-bd97-d97e12fe72c1',
                html: '<p>?</p>',
                type: 'Text'
              }
            ],
            is_finish: false
          }
        ],
        status: 1,
        title: 'Multiplayer Scenario',
        users: [
          {
            id: 2,
            email: 'owner@email.com',
            username: 'owner',
            personalname: 'Owner Account',
            roles: ['owner'],
            is_owner: true,
            is_author: true,
            is_reviewer: false
          }
        ],
        id: 42,
        created_at: '2020-08-31T17:50:28.089Z',
        updated_at: null,
        deleted_at: null
      }
    ];
    dispatch({
      type: GET_SCENARIOS_SUCCESS,
      scenarios
    });
    return scenarios;
  });
  usersActions.getUser = jest.fn();
  usersActions.getUser.mockImplementation(() => async dispatch => {
    const user = {
      id: 2,
      email: 'owner@email.com',
      username: 'owner',
      personalname: 'Owner Account',
      roles: ['owner'],
      is_owner: true,
      is_author: true,
      is_reviewer: false
    };
    dispatch({
      type: GET_USER_SUCCESS,
      user
    });
    return user;
  });
  usersActions.getUsers = jest.fn();
  usersActions.getUsers.mockImplementation(() => async dispatch => {
    const users = [
      {
        id: 2,
        email: 'owner@email.com',
        username: 'owner',
        personalname: 'Owner Account',
        roles: ['owner'],
        is_owner: true,
        is_author: true,
        is_reviewer: false
      }
    ];
    dispatch({
      type: GET_USERS_SUCCESS,
      users
    });
    return users;
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const sharedProps = {
  history: {
    push() {}
  }
};

test('ScenariosList', () => {
  expect(ScenariosList).toBeDefined();
});

test('Snapshot 1', () => {
  const props = {
    ...sharedProps,
    title: '',
    description: '',
    id: '',
    onClick() {}
  };
  const mounted = mounter(reduxer(ScenariosList, props, state))();
  expect(snapshot(mounted)).toMatchSnapshot();
});

/*{INJECTION}*/
