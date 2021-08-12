import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HomePerfume } from '@learn-bit-react/perfume-store.ui.pages.home-perfume';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
import { Footer } from '@learn-bit-react/ecommerce.ui.footer';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { Theme } from '@learn-bit-react/base-ui.themes.theme';
// import { PerfumeTheme } from '@learn-bit-react/perfume-store.ui.themes.perfume-theme';
import { AboutPerfume } from '@learn-bit-react/perfume-store.ui.pages.about-perfume';

import styles from './perfume-store.module.scss';

export function PerfumeStoreApp() {
  return (
    <>
      <Helmet>
        <title>The amazing online Perfume store</title>
        <meta
          name="description"
          content="Demo of an online Perfume shop made with Bit components"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Tangerine&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
      </Helmet>
      <BrowserRouter>
        <Theme colors={styles.colors}>
          <Layout>
            <Header
              logoText="Bit Perfume Store"
              src="https://static.bit.dev/bit-logo.svg"
              alt="Bit Logo">
              <Link href="/mens">Mens</Link>
              <Link href="/womens">Womens</Link>
              <Link href="/specials">Specials</Link>
            </Header>
            <Switch>
              <Route path="/about" exact>
                <AboutPerfume />
              </Route>
              <Route path="/">
                <HomePerfume />
              </Route>
            </Switch>

            <Footer
              logoText="Bit Perfume Store"
              src="https://static.bit.dev/bit-logo.svg"
              alt="Bit Logo">
              <Link href="/privacy">Privacy</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
            </Footer>
          </Layout>
        </Theme>
      </BrowserRouter>
    </>
  );
}
