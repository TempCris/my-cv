// ---Dependencys
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
// ---Redux
import { useDispatch } from 'react-redux';
import {
  changeResponsiveFlag,
  updatePath,
  updateParams
} from 'Actions/appInfo';
import { ResponsiveData } from '@Redux/reducers/appInfo/customTypes';
// ---Types
import { AppProps } from 'next/app';
// ---Others
import 'Styles/colors.less';
import 'Styles/index.less';
import isMovilDetector from 'Others/isMovilDetector';
// ---Redux
import { wrapper } from '@Redux/store';

function App({ Component, pageProps }: AppProps): ReactElement {
  const responsiveData = isMovilDetector();
  // ------------------------Const, States and hooks--------------------
  const { pathname: currentPath, query: urlParams } = useRouter();
  // ---Redux Actions
  const dispatchR = useDispatch();
  const updateResponsiveData = (data: ResponsiveData) => dispatchR(changeResponsiveFlag(data));
  const updateCurrentPath = () => dispatchR(updatePath(currentPath));
  const updateCurrentParams = () => dispatchR(updateParams(urlParams));
  // ---AppData Redux update
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);
  useEffect(() => { updateCurrentPath(); }, [currentPath]);
  useEffect(() => { updateCurrentParams(); }, [urlParams]);
  // -----------------------------------Render---------------------------------
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
