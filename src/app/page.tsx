"use client";

import styles from "./page.module.css";
import { FilterBar } from "./components/filter-bar";
import { ProductsList } from "./components/products-list";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
`;

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <Container>
          <FilterBar />
          <ProductsList />
        </Container>
      </main>
    </QueryClientProvider>
  );
}
