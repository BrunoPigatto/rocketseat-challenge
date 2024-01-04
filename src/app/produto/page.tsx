/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "styled-components";
import { BackButton } from "../components/atoms/back-button";
import useProduct from "@/hooks/useProduct";

const Container = styled.div`
  padding: 34px 30px;
  width: 100%;
  height: 100%;
  background-color: var(--bg-primary);
`;

const ProductContainer = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
`;

export default function ProductPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams?.id);

  return (
    <Container>
      <ProductContainer>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} alt="product image" />
          <div>
            <span>{data?.category}</span>
            <h2>{data?.name}</h2>
            <span>{data?.price_in_cents}</span>
            <p>
              Frete de R$ 40,00 para todo o Brasil. Grátis para compras acima de
              R$ 900,00
            </p>
            <h3>Descrição</h3>
            <p>{data?.description}</p>
          </div>
        </section>
      </ProductContainer>
    </Container>
  );
}
