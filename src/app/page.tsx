'use client';

import { Footer } from '@/components/footer';
import { GridProducts } from '@/components/grid/grid-products';
import { Header } from '@/components/header';
import { BoxMain } from '@/styles/Home.style';

export default function Home() {
  return (
    <BoxMain>
      <Header />
      <main>
        <GridProducts />
      </main>
      <Footer />
    </BoxMain>
  );
}
