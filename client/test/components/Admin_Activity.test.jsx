import React from 'react';
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

import assert from 'assert';
import {
  fetchImplementation,
  mounter,
  reduxer,
  snapshotter,
  state,
} from '../bootstrap';
import { unmountComponentAtNode } from 'react-dom';

import { mount, shallow } from 'enzyme';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { List } from '@components/UI';
import { GET_LOGS_SUCCESS } from '../../actions/types';
import * as logsActions from '../../actions/logs';
jest.mock('../../actions/logs');

import Activity from '../../components/Admin/Activity.jsx';

const original = JSON.parse(JSON.stringify(state));
let container = null;
let commonProps = null;
let commonState = null;

beforeAll(() => {
  (window || global).fetch = jest.fn();
});

afterAll(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  container = document.createElement('div');
  container.setAttribute('id', 'root');
  document.body.appendChild(container);

  fetchImplementation(fetch);

  logsActions.getLogs = jest.fn();
  logsActions.getLogs.mockImplementation(() => async (dispatch) => {
    const logs = JSON.parse(JSON.stringify(original.logs));
    dispatch({ type: GET_LOGS_SUCCESS, logs });
    return logs;
  });

  commonProps = {};
  commonState = JSON.parse(JSON.stringify(original));
});

afterEach(() => {
  jest.resetAllMocks();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  commonProps = null;
  commonState = null;
});

test('Activity', () => {
  expect(Activity).toBeDefined();
});

test('Render 1 1', async (done) => {
  const Component = Activity;

  const props = {
    ...commonProps,
    logs: [],
    logsById: {},
  };

  const state = {
    ...commonState,
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(mounted.find('EditorMenu')).toHaveLength(1);
  expect(mounted.find('Pagination')).toHaveLength(1);

  done();
});

test('Render 2 1', async (done) => {
  const Component = Activity;

  const props = {
    ...commonProps,
    user: null,
    logs: [],
    logsById: {},
  };

  const state = {
    ...commonState,
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(mounted.find('EditorMenu')).toHaveLength(1);
  expect(mounted.find('Pagination')).toHaveLength(1);

  done();
});

test('Render 3 1', async (done) => {
  const Component = Activity;

  const props = {
    ...commonProps,
    user: {
      username: 'super',
      personalname: 'Super User',
      email: 'super@email.com',
      id: 999,
      roles: ['participant', 'super_admin', 'facilitator', 'researcher'],
      is_anonymous: false,
      is_super: true,
    },
    logs: [],
    logsById: {},
  };

  const state = {
    ...commonState,
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(mounted.find('EditorMenu')).toHaveLength(1);
  expect(mounted.find('Pagination')).toHaveLength(1);

  done();
});

test('Render 4 1', async (done) => {
  const Component = Activity;

  const props = {
    ...commonProps,
    user: {
      username: 'super',
      personalname: 'Super User',
      email: 'super@email.com',
      id: 999,
      roles: ['participant', 'super_admin', 'facilitator', 'researcher'],
      is_anonymous: false,
      is_super: true,
    },
    logs: [
      {
        id: 885,
        created_at: '2020-01-01T00:51:05.143Z',
        capture: {
          request: {
            url: '/runs/116/update',
            body: { ended_at: '2020-01-01T00:51:05.116Z' },
            query: {},
            method: 'POST',
            params: {},
            headers: {
              host: 'localhost:3000',
              cookie:
                '_ga=GA1.1.585879633.1536761668; connect.sid=s%3AcwNKX0lbxVQLmVrxdn5_GQNrxBSBqjjw.HGR5DGKA%2BlDKy72mK1BCvQLiOb3mYBCBL5XNFNQxMFk',
              origin: 'http://localhost:3000',
              referer: 'http://localhost:3000/run/8/slide/2',
              connection: 'close',
              'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
              'content-type': 'application/json',
              'content-length': '39',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'accept-encoding': 'gzip, deflate, br',
              'accept-language': 'en-US,en;q=0.9',
            },
            session: {
              user: {
                id: 999,
                email: 'super@email.com',
                roles: [
                  'participant',
                  'super_admin',
                  'facilitator',
                  'researcher',
                ],
                is_super: true,
                username: 'super',
                is_anonymous: false,
                personalname: 'Super User',
              },
              cookie: {
                path: '/',
                expires: '2020-05-12T00:51:05.142Z',
                httpOnly: true,
                originalMaxAge: 2592000000,
              },
            },
          },
          response: '',
        },
      },
      {
        id: 884,
        created_at: '2020-01-01T00:50:42.232Z',
        capture: {
          request: {
            url: '/runs/116/response/be18ddc1-7e06-496c-9f33-42bfe6ac05b9',
            body: {
              type: 'TextResponse',
              value: 'sdfsdfsdfsdf',
              isSkip: false,
              content: '',
              ended_at: '2020-01-01T00:50:35.645Z',
              created_at: '2020-01-01T00:50:34.648Z',
            },
            query: {},
            method: 'POST',
            params: {},
            headers: {
              host: 'localhost:3000',
              cookie:
                '_ga=GA1.1.585879633.1536761668; connect.sid=s%3AcwNKX0lbxVQLmVrxdn5_GQNrxBSBqjjw.HGR5DGKA%2BlDKy72mK1BCvQLiOb3mYBCBL5XNFNQxMFk',
              origin: 'http://localhost:3000',
              referer: 'http://localhost:3000/run/8/slide/1',
              connection: 'close',
              'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
              'content-type': 'application/json',
              'content-length': '152',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'accept-encoding': 'gzip, deflate, br',
              'accept-language': 'en-US,en;q=0.9',
            },
            session: {
              user: {
                id: 999,
                email: 'super@email.com',
                roles: [
                  'participant',
                  'super_admin',
                  'facilitator',
                  'researcher',
                ],
                is_super: true,
                username: 'super',
                is_anonymous: false,
                personalname: 'Super User',
              },
              cookie: {
                path: '/',
                expires: '2020-05-12T00:50:42.232Z',
                httpOnly: true,
                originalMaxAge: 2592000000,
              },
            },
          },
        },
      },
    ],
    logsById: {
      884: {
        id: 884,
        created_at: '2020-01-01T00:50:42.232Z',
        capture: {
          request: {
            url: '/runs/116/response/be18ddc1-7e06-496c-9f33-42bfe6ac05b9',
            body: {
              type: 'TextResponse',
              value: 'sdfsdfsdfsdf',
              isSkip: false,
              content: '',
              ended_at: '2020-01-01T00:50:35.645Z',
              created_at: '2020-01-01T00:50:34.648Z',
            },
            query: {},
            method: 'POST',
            params: {},
            headers: {
              host: 'localhost:3000',
              cookie:
                '_ga=GA1.1.585879633.1536761668; connect.sid=s%3AcwNKX0lbxVQLmVrxdn5_GQNrxBSBqjjw.HGR5DGKA%2BlDKy72mK1BCvQLiOb3mYBCBL5XNFNQxMFk',
              origin: 'http://localhost:3000',
              referer: 'http://localhost:3000/run/8/slide/1',
              connection: 'close',
              'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
              'content-type': 'application/json',
              'content-length': '152',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'accept-encoding': 'gzip, deflate, br',
              'accept-language': 'en-US,en;q=0.9',
            },
            session: {
              user: {
                id: 999,
                email: 'super@email.com',
                roles: [
                  'participant',
                  'super_admin',
                  'facilitator',
                  'researcher',
                ],
                is_super: true,
                username: 'super',
                is_anonymous: false,
                personalname: 'Super User',
              },
              cookie: {
                path: '/',
                expires: '2020-05-12T00:50:42.232Z',
                httpOnly: true,
                originalMaxAge: 2592000000,
              },
            },
          },
        },
      },
      885: {
        id: 885,
        created_at: '2020-01-01T00:51:05.143Z',
        capture: {
          request: {
            url: '/runs/116/update',
            body: { ended_at: '2020-01-01T00:51:05.116Z' },
            query: {},
            method: 'POST',
            params: {},
            headers: {
              host: 'localhost:3000',
              cookie:
                '_ga=GA1.1.585879633.1536761668; connect.sid=s%3AcwNKX0lbxVQLmVrxdn5_GQNrxBSBqjjw.HGR5DGKA%2BlDKy72mK1BCvQLiOb3mYBCBL5XNFNQxMFk',
              origin: 'http://localhost:3000',
              referer: 'http://localhost:3000/run/8/slide/2',
              connection: 'close',
              'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
              'content-type': 'application/json',
              'content-length': '39',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'accept-encoding': 'gzip, deflate, br',
              'accept-language': 'en-US,en;q=0.9',
            },
            session: {
              user: {
                id: 999,
                email: 'super@email.com',
                roles: [
                  'participant',
                  'super_admin',
                  'facilitator',
                  'researcher',
                ],
                is_super: true,
                username: 'super',
                is_anonymous: false,
                personalname: 'Super User',
              },
              cookie: {
                path: '/',
                expires: '2020-05-12T00:51:05.142Z',
                httpOnly: true,
                originalMaxAge: 2592000000,
              },
            },
          },
          response: '}',
        },
      },
    },
  };

  const state = {
    ...commonState,
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(mounted.find('EditorMenu')).toHaveLength(1);
  expect(mounted.find('Pagination')).toHaveLength(1);

  done();
});

/*{INJECTION}*/

