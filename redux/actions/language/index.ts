import { Dispatch, AnyAction } from 'redux';
import { TO_ENGLISH, TO_SPANISH } from 'Types';

export const toEnglish = () => (dispatch: Dispatch<AnyAction>): void => {
  dispatch({
    type: TO_ENGLISH
  });
};

export const toSpanish = () => (dispatch: Dispatch<AnyAction>): void => {
  dispatch({
    type: TO_SPANISH
  });
};

export default null;
