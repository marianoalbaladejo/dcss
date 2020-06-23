import { combineReducers } from 'redux';

import { cohort, cohorts, cohortsById } from './cohort';
import errors from './errors';
import login from './login';
import { response, responses, responsesById } from './response';
import { run, runs } from './run';
import { history, scenario } from './scenario';
import { scenarios, scenariosById } from './scenarios';
import tags from './tags';
import { user } from './user';
import { users, usersById } from './users';

export default combineReducers({
  cohort,
  cohorts,
  cohortsById,
  errors,
  history,
  login,
  response,
  responses,
  responsesById,
  run,
  runs,
  scenario,
  scenarios,
  scenariosById,
  tags,
  user,
  users,
  usersById
});
