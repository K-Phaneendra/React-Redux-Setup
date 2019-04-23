// import {  } from './APIMethods';
import { ActionType } from './actionType';
// import {  } from './ActionURL';

export const checkRedux = bool => dispatch =>
  dispatch({ type: ActionType.TEST_ACTIONTYPE, payload: bool });
