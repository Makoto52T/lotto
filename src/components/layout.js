import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Script from 'next/script';
import TopBar from './topBar';
import {Row, Col} from 'react-bootstrap';
import NavberCp from './NavberCp';
import Cookie from 'js-cookie';

function Layout({children}) {
  const router = useRouter ();
  const path = router.pathname;
  const [userInfo, setUserInfo] = useState ();

  useEffect (() => {
    init ();
  }, []);

  function init () {
    const user = Cookie.get ('user');
    if (!user) {
      router.push ('/login');
    } else {
      setUserInfo (user);
    }
  }

  return (
    <div>
      <Head>
        <title>title for head page</title>
        <meta name="description" content="ระบบหวย" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <bod>

        <TopBar userInfo={userInfo} />
        <Row style={{margin:"0px",padding:"0px"}}>
          <Col md="auto" style={{margin:"0px"}}>
            <NavberCp />
          </Col>
          <Col>
            <div>{children}</div>
          </Col>
        </Row>

        {/* <Script disable-devtool-auto src="https://cdn.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js"></Script> */}
      </bod>
    </div>
  );
}

export default Layout;
