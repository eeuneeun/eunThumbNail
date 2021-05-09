import 'semantic-ui-css/semantic.min.css'
import '../styles/reset.css';
import '../styles/common.css';

import { useState } from 'react';
import Top from './layout/Top';
import Gnb from './layout/Gnb';

function MyApp({ Component, pageProps }) {

  const [isOpenGnb, setIsOpenGnb] = useState(false);
  // const [Gnb, setGnb] = useState(false);

  // console.log("최상단 : " +Gnb)
  
  return (
    <>
      <Gnb {...pageProps}
        isOpenGnb={isOpenGnb}
        setIsOpenGnb={setIsOpenGnb}/>
      <Top {...pageProps}
        isOpenGnb={isOpenGnb}
        setIsOpenGnb={setIsOpenGnb}/>
      <Component {...pageProps} />
    </>
    )

}

export default MyApp
