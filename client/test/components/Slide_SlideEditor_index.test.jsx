import React from 'react';
import assert from 'assert';
import {
  fetchImplementation,
  mounter,
  reduxer,
  snapshotter,
  state,
} from '../bootstrap';
import { unmountComponentAtNode } from 'react-dom';
import { mount, render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SlideEditor from '../../components/Slide/SlideEditor/index.jsx';

const original = JSON.parse(JSON.stringify(state));
let container = null;
let commonProps = null;
let commonState = null;

beforeAll(() => {
  (window || global).fetch = jest.fn();
});

afterAll(() => {
  fetch.mockRestore();
});

beforeEach(() => {
  container = document.createElement('div');
  container.setAttribute('id', 'root');
  document.body.appendChild(container);

  fetchImplementation(fetch);

  commonProps = {
    history: {
      push() {},
    },
  };

  commonState = JSON.parse(JSON.stringify(original));
});

afterEach(() => {
  fetch.mockReset();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  commonProps = null;
  commonState = null;
});

test('SlideEditor', () => {
  expect(SlideEditor).toBeDefined();
});

test('Snapshot 1 1', async (done) => {
  const Component = SlideEditor;

  const props = {
    ...commonProps,
    slides: [
      {
        id: 1,
        title: '',
        components: [{ html: '<h2>Bye!</h2>', type: 'Text' }],
        is_finish: true,
      },
      {
        id: 2,
        title: '',
        components: [
          {
            id: 'b7e7a3f1-eb4e-4afa-8569-eb6677358c9e',
            html: '<p>Hi!</p>',
            type: 'Text',
          },
        ],
      },
    ],
  };

  const state = {
    ...commonState,
  };

  const reduxed = reduxer(Component, props, state);
  const wrapper = mounter(reduxed);
  expect(snapshotter(reduxed)).toMatchSnapshot();
  expect(snapshotter(wrapper)).toMatchSnapshot();

  const component = wrapper.findWhere((n) => {
    return n.type() === Component;
  });
  expect(snapshotter(component)).toMatchSnapshot();

  done();
});

/*{INJECTION}*/

