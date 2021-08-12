import React from 'react';
import { Helmet } from 'react-helmet';
import { ProductCardGrid } from '@learn-bit-react/ecommerce.ui.product.product-card-grid';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { mockPerfumeList } from '@learn-bit-react/perfume-store.entity.perfume';

import styles from './home-perfume.module.scss';

export function HomePerfume() {
  return (
    <>
      <Helmet>
        <title>The amazing online Perfume store | Home page</title>
        <meta
          name="description"
          content="Demo of an online Perfume shop made with Bit components"
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <StoreHero
          className={styles.hero}
          background="url(https://images.unsplash.com/photo-1599733687773-14a83800fd0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80)
    no-repeat center center scroll"
          headingText="Your Number 1 Perfume Shop"
          href="/shop"
          linkText="Shop Now"
        />
        <ProductCardGrid className={styles.products} list={mockPerfumeList} />
      </Layout>
    </>
  );
}
