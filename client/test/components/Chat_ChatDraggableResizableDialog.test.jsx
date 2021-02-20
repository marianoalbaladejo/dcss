import React from 'react';
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect
}));

import {
  fetchImplementation,
  mounter,
  reduxer,
  serialize,
  snapshotter,
  state
} from '../bootstrap';
import { unmountComponentAtNode } from 'react-dom';

import {
  act,
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/** @GENERATED: BEGIN **/

import Emitter from 'events';

import Storage from '@utils/Storage';
jest.mock('@utils/Storage', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@utils/Storage')
  };
});

import Layout from '@utils/Layout';
jest.mock('@utils/Layout', () => {
  return {
    ...jest.requireActual('@utils/Layout'),
    isForMobile: jest.fn(() => false),
    isNotForMobile: jest.fn(() => true)
  };
});

globalThis.rndProps = {};
jest.mock('react-rnd', () => {
  function Rnd(props) {
    globalThis.rndProps = {
      ...props
    };

    // eslint-disable-next-line react/prop-types
    return <div>{props.children}</div>;
  }

  return {
    __esModule: true,
    Rnd
  };
});

import ChatDraggableResizableDialog from '../../components/Chat/ChatDraggableResizableDialog.jsx';
/** @GENERATED: END **/

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
  jest.useFakeTimers();
  container = document.createElement('div');
  container.setAttribute('id', 'root');
  document.body.appendChild(container);

  fetchImplementation(fetch);

  /** @GENERATED: BEGIN **/

  globalThis.rndProps = null;
  jest.spyOn(window, 'addEventListener');
  jest.spyOn(window, 'removeEventListener');

  /** @GENERATED: END **/

  commonProps = {};
  commonState = JSON.parse(JSON.stringify(original));
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  commonProps = null;
  commonState = null;
});

test('ChatDraggableResizableDialog', () => {
  expect(ChatDraggableResizableDialog).toBeDefined();
});

test('Render 1 1', async done => {
  /** @GENERATED: BEGIN **/
  const Component = ChatDraggableResizableDialog;
  const props = {
    ...commonProps,
    dimensions: {},
    position: {},
    isMinimized: false,
    onDragResizeStart: jest.fn(),
    onDragResize: jest.fn(),
    onDragResizeStop: jest.fn()
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);
  /** @GENERATED: END **/

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();

  done();
});

/* INJECTION STARTS HERE */

test('Default height and width when undefined', async done => {
  const Component = ChatDraggableResizableDialog;

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  done();
});

test('Default height and width when 0', async done => {
  const Component = ChatDraggableResizableDialog;

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children,
    dimentions: {
      height: 0,
      width: 0
    }
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  done();
});

test('Rnd', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return true;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();

  expect(globalThis.rndProps).toMatchInlineSnapshot(`
    Object {
      "children": <Ref
        innerRef={[Function]}
      >
        <div
          className="ui modal transition visible active c__container-modal resizable"
          role="dialog"
        >
          <div>
            a
          </div>
        </div>
      </Ref>,
      "disableDragging": undefined,
      "dragHandleClassName": "c__drag-handle",
      "minHeight": 590,
      "minWidth": 430,
      "onDrag": [Function],
      "onDragStart": [Function],
      "onDragStop": [Function],
      "onResize": [Function],
      "onResizeStart": [Function],
      "onResizeStop": [Function],
      "position": Object {
        "x": 0,
        "y": 100,
      },
      "resizeHandleWrapperClass": "c__size-handle",
      "size": Object {
        "height": 590,
        "width": 430,
      },
      "style": Object {
        "alignItems": "center",
        "background": "#f0f0f0",
        "border": "solid 1px #ddd",
        "display": "flex",
        "justifyContent": "center",
      },
    }
  `);
  done();
});

test('No Rnd on mobile', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return false;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);
  done();
});

test('Rnd: onDragStop/onResizeStop', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return true;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children,
    dimensions: {},
    position: {},
    isMinimized: false,
    onDragResizeStop: jest.fn()
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  expect(globalThis.rndProps).toMatchInlineSnapshot(`
    Object {
      "children": <Ref
        innerRef={[Function]}
      >
        <div
          className="ui modal transition visible active c__container-modal resizable"
          role="dialog"
        >
          <div>
            a
          </div>
        </div>
      </Ref>,
      "disableDragging": false,
      "dragHandleClassName": "c__drag-handle",
      "minHeight": 590,
      "minWidth": 430,
      "onDrag": [Function],
      "onDragStart": [Function],
      "onDragStop": [Function],
      "onResize": [Function],
      "onResizeStart": [Function],
      "onResizeStop": [Function],
      "position": Object {
        "x": 0,
        "y": 100,
      },
      "resizeHandleWrapperClass": "c__size-handle",
      "size": Object {
        "height": 590,
        "width": 430,
      },
      "style": Object {
        "alignItems": "center",
        "background": "#f0f0f0",
        "border": "solid 1px #ddd",
        "display": "flex",
        "justifyContent": "center",
      },
    }
  `);

  const event = {};
  const direction = 'top';
  const resizer = document.createElement('div');
  const delta = { width: 400, height: 400 };
  const position = { x: 393, y: 174 };
  // e, { x, y }
  globalThis.rndProps.onDragStop(event, { ...delta, ...position });

  // e, direction, resizer, delta, position
  globalThis.rndProps.onResizeStop(event, direction, resizer, delta, position);

  await waitFor(() => expect(props.onDragResizeStop).toHaveBeenCalledTimes(2));

  expect(props.onDragResizeStop.mock.calls[0]).toMatchInlineSnapshot(`
    Array [
      Object {
        "height": 590,
        "width": 430,
        "x": 393,
        "y": 174,
      },
    ]
  `);
  done();
});

test('Rnd: onDragStop/onResizeStop without props.onDragResizeStop', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return true;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children,
    dimensions: {},
    position: {},
    isMinimized: false
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  expect(globalThis.rndProps).toMatchInlineSnapshot(`
    Object {
      "children": <Ref
        innerRef={[Function]}
      >
        <div
          className="ui modal transition visible active c__container-modal resizable"
          role="dialog"
        >
          <div>
            a
          </div>
        </div>
      </Ref>,
      "disableDragging": false,
      "dragHandleClassName": "c__drag-handle",
      "minHeight": 590,
      "minWidth": 430,
      "onDrag": [Function],
      "onDragStart": [Function],
      "onDragStop": [Function],
      "onResize": [Function],
      "onResizeStart": [Function],
      "onResizeStop": [Function],
      "position": Object {
        "x": 0,
        "y": 100,
      },
      "resizeHandleWrapperClass": "c__size-handle",
      "size": Object {
        "height": 590,
        "width": 430,
      },
      "style": Object {
        "alignItems": "center",
        "background": "#f0f0f0",
        "border": "solid 1px #ddd",
        "display": "flex",
        "justifyContent": "center",
      },
    }
  `);

  const event = {};
  const direction = 'top';
  const resizer = document.createElement('div');
  const delta = { width: 400, height: 400 };
  const position = { x: 393, y: 174 };
  // e, { x, y }
  globalThis.rndProps.onDragStop(event, { ...delta, ...position });

  // e, direction, resizer, delta, position
  globalThis.rndProps.onResizeStop(event, direction, resizer, delta, position);

  expect(serialize()).toMatchSnapshot();
  done();
});

test('Rnd: onDrag/onResize', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return true;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children,
    dimensions: {},
    position: {},
    isMinimized: false,
    onDragResize: jest.fn()
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  expect(globalThis.rndProps).toMatchInlineSnapshot(`
    Object {
      "children": <Ref
        innerRef={[Function]}
      >
        <div
          className="ui modal transition visible active c__container-modal resizable"
          role="dialog"
        >
          <div>
            a
          </div>
        </div>
      </Ref>,
      "disableDragging": false,
      "dragHandleClassName": "c__drag-handle",
      "minHeight": 590,
      "minWidth": 430,
      "onDrag": [Function],
      "onDragStart": [Function],
      "onDragStop": [Function],
      "onResize": [Function],
      "onResizeStart": [Function],
      "onResizeStop": [Function],
      "position": Object {
        "x": 0,
        "y": 100,
      },
      "resizeHandleWrapperClass": "c__size-handle",
      "size": Object {
        "height": 590,
        "width": 430,
      },
      "style": Object {
        "alignItems": "center",
        "background": "#f0f0f0",
        "border": "solid 1px #ddd",
        "display": "flex",
        "justifyContent": "center",
      },
    }
  `);

  const event = {};
  const direction = 'top';
  const resizer = document.createElement('div');
  const delta = { width: 400, height: 400 };
  const position = { x: 393, y: 174 };
  // e, { x, y }
  globalThis.rndProps.onDrag(event, { ...delta, ...position });

  // e, direction, resizer, delta, position
  globalThis.rndProps.onResize(event, direction, resizer, delta, position);

  await waitFor(() => expect(props.onDragResize).toHaveBeenCalledTimes(2));

  expect(props.onDragResize.mock.calls[0]).toMatchInlineSnapshot(`
    Array [
      Object {
        "height": 590,
        "rndStyle": Object {},
        "width": 430,
        "x": 393,
        "y": 174,
      },
    ]
  `);
  done();
});

test('Rnd: onDrag/onResize without props.onDragResize', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return true;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children,
    dimensions: {},
    position: {},
    isMinimized: false
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  expect(globalThis.rndProps).toMatchInlineSnapshot(`
    Object {
      "children": <Ref
        innerRef={[Function]}
      >
        <div
          className="ui modal transition visible active c__container-modal resizable"
          role="dialog"
        >
          <div>
            a
          </div>
        </div>
      </Ref>,
      "disableDragging": false,
      "dragHandleClassName": "c__drag-handle",
      "minHeight": 590,
      "minWidth": 430,
      "onDrag": [Function],
      "onDragStart": [Function],
      "onDragStop": [Function],
      "onResize": [Function],
      "onResizeStart": [Function],
      "onResizeStop": [Function],
      "position": Object {
        "x": 0,
        "y": 100,
      },
      "resizeHandleWrapperClass": "c__size-handle",
      "size": Object {
        "height": 590,
        "width": 430,
      },
      "style": Object {
        "alignItems": "center",
        "background": "#f0f0f0",
        "border": "solid 1px #ddd",
        "display": "flex",
        "justifyContent": "center",
      },
    }
  `);

  const event = {};
  const direction = 'top';
  const resizer = document.createElement('div');
  const delta = { width: 400, height: 400 };
  const position = { x: 393, y: 174 };
  // e, { x, y }
  globalThis.rndProps.onDrag(event, { ...delta, ...position });

  // e, direction, resizer, delta, position
  globalThis.rndProps.onResize(event, direction, resizer, delta, position);

  expect(serialize()).toMatchSnapshot();
  done();
});

test('Rnd: onDragStart/onResizeStart', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return true;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children,
    dimensions: {},
    position: {},
    isMinimized: false,
    onDragResizeStart: jest.fn()
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  expect(globalThis.rndProps).toMatchInlineSnapshot(`
    Object {
      "children": <Ref
        innerRef={[Function]}
      >
        <div
          className="ui modal transition visible active c__container-modal resizable"
          role="dialog"
        >
          <div>
            a
          </div>
        </div>
      </Ref>,
      "disableDragging": false,
      "dragHandleClassName": "c__drag-handle",
      "minHeight": 590,
      "minWidth": 430,
      "onDrag": [Function],
      "onDragStart": [Function],
      "onDragStop": [Function],
      "onResize": [Function],
      "onResizeStart": [Function],
      "onResizeStop": [Function],
      "position": Object {
        "x": 0,
        "y": 100,
      },
      "resizeHandleWrapperClass": "c__size-handle",
      "size": Object {
        "height": 590,
        "width": 430,
      },
      "style": Object {
        "alignItems": "center",
        "background": "#f0f0f0",
        "border": "solid 1px #ddd",
        "display": "flex",
        "justifyContent": "center",
      },
    }
  `);

  const event = {};
  const direction = 'top';
  const resizer = document.createElement('div');
  const delta = { width: 400, height: 400 };
  const position = { x: 393, y: 174 };
  // e, { x, y }
  globalThis.rndProps.onDragStart(event, { ...delta, ...position });

  // e, direction, resizer, delta, position
  globalThis.rndProps.onResizeStart(event, direction, resizer, delta, position);

  await waitFor(() => expect(props.onDragResizeStart).toHaveBeenCalledTimes(2));

  expect(props.onDragResizeStart.mock.calls[0]).toMatchInlineSnapshot(
    `Array []`
  );
  done();
});

test('Rnd: onDragStart/onResizeStart without props.onDragResizeStart', async done => {
  const Component = ChatDraggableResizableDialog;

  Layout.isNotForMobile.mockImplementation(() => {
    return true;
  });

  const children = <div>a</div>;

  const props = {
    ...commonProps,
    children,
    dimensions: {},
    position: {},
    isMinimized: false
  };

  const state = {
    ...commonState
  };

  const ConnectedRoutedComponent = reduxer(Component, props, state);

  expect(globalThis.rndProps).toMatchInlineSnapshot(`null`);

  await render(<ConnectedRoutedComponent {...props} />);
  expect(serialize()).toMatchSnapshot();
  expect(globalThis.rndProps).toMatchInlineSnapshot(`
    Object {
      "children": <Ref
        innerRef={[Function]}
      >
        <div
          className="ui modal transition visible active c__container-modal resizable"
          role="dialog"
        >
          <div>
            a
          </div>
        </div>
      </Ref>,
      "disableDragging": false,
      "dragHandleClassName": "c__drag-handle",
      "minHeight": 590,
      "minWidth": 430,
      "onDrag": [Function],
      "onDragStart": [Function],
      "onDragStop": [Function],
      "onResize": [Function],
      "onResizeStart": [Function],
      "onResizeStop": [Function],
      "position": Object {
        "x": 0,
        "y": 100,
      },
      "resizeHandleWrapperClass": "c__size-handle",
      "size": Object {
        "height": 590,
        "width": 430,
      },
      "style": Object {
        "alignItems": "center",
        "background": "#f0f0f0",
        "border": "solid 1px #ddd",
        "display": "flex",
        "justifyContent": "center",
      },
    }
  `);

  const event = {};
  const direction = 'top';
  const resizer = document.createElement('div');
  const delta = { width: 400, height: 400 };
  const position = { x: 393, y: 174 };
  // e, { x, y }
  globalThis.rndProps.onDragStart(event, { ...delta, ...position });

  // e, direction, resizer, delta, position
  globalThis.rndProps.onResizeStart(event, direction, resizer, delta, position);

  expect(serialize()).toMatchSnapshot();
  done();
});