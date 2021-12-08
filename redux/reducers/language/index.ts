import { TO_ENGLISH, TO_SPANISH } from 'Types';
import { Action, ReducerState } from '@Reducers/language/customTypes';
// ---Others
import {
  englishData, englishLabels, spanishData, spanishLabels
} from 'Others/globalData';

const INITIAL_STATE: ReducerState = {
  currentLan: 'english',
  data: englishData,
  labels: englishLabels
};

export default (state = INITIAL_STATE, action: Action): ReducerState => {
  switch (action.type) {
    case TO_ENGLISH:
      return {
        currentLan: 'english',
        data: englishData,
        labels: englishLabels
      };
    case TO_SPANISH:
      return {
        currentLan: 'spanish',
        data: spanishData,
        labels: spanishLabels
      };

    default:
      return state;
  }
};
