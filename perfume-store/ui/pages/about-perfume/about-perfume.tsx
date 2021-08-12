import React from 'react';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { AboutPerfumeContent } from '@learn-bit-react/perfume-store.content.about-perfume';
import styles from './about-perfume.module.scss';

export function AboutPerfume() {
  return (
    <Layout>
      <StoreHero
        className={styles.hero}
        background="url(https://images.unsplash.com/photo-1589176009961-abd05a18e3dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)
    no-repeat center center scroll"
        headingText="About our Shop"
        href="/"
        linkText="Shop Now"
      />
      <div className="content">
        <AboutPerfumeContent />
      </div>
    </Layout>
  );
}
