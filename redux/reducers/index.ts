// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import { ReducerState as AppInfoState } from '@Reducers/appInfo/customTypes';
import { ReducerState as LanguageState } from '@Reducers/language/customTypes';
// ---Reducers
import languageReducer from '@Reducers/language';
import appInfoReducer from '@Reducers/appInfo';
// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  appInfoReducer: AppInfoState;
  languageReducer: LanguageState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  languageReducer,
  appInfoReducer
});

export default rootReducer;
