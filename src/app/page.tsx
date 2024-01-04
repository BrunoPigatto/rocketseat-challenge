"use client";

import styles from "./page.module.css";
import { FilterBar } from "./components/molecules/filter-bar";
import { ProductsList } from "./components/molecules/products-list";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <FilterBar />
        <ProductsList />
      </Container>
    </main>
  );
}
