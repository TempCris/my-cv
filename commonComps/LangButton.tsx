// ---Dependencies
import { ReactElement } from 'react';
// ---Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  toSpanish,
  toEnglish
} from 'Actions/language';
import { ReduxState } from 'Reducers';

export default function LangButton(): ReactElement {
  // ---Redux States
  const { currentLan } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  // ---Redux Actions
  const dispatchR = useDispatch();
  const toEng = () => dispatchR(toEnglish());
  const toSp = () => dispatchR(toSpanish());
  // ---Main Methods
  function invertLanguage() {
    if (currentLan === 'english') {
      toSp();
      return null;
    }
    toEng();
    return null;
  }
  return (
    <button type="button" className="lang-button" onClick={invertLanguage}>
      {currentLan === 'english' ? 'ES' : 'EN'}
    </button>
  );
}
