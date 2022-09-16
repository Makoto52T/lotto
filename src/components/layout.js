import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from 'next/script'

function Layout({ children }) {

    const router = useRouter()
    const path = router.pathname;


    return (
        <div>
            <Head>
                <title>title for head page</title>
                <meta name="description" content="Friday" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <bod>
                <div>{children}</div>
                {/* <Script disable-devtool-auto src="https://cdn.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js"></Script> */}
            </bod>
        </div>
    );
}

export default Layout;
