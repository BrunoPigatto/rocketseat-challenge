/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "styled-components";
import { BackButton } from "../components/atoms/back-button";
import useProduct from "@/hooks/useProduct";
import SingleProduct from "../components/molecules/single-product";
import BuyButton from "../components/atoms/buy-button";

const Container = styled.div`
  padding: 34px 30px;
  width: 100%;
  height: 100%;
`;

const ProductContainer = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;

  section {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 22px;

    img {
      max-width: 640px;
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export default function ProductPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams?.id);

  return (
    <section>
      <Container>
        <ProductContainer>
          <BackButton navigate="home" />
          <section>
            <img src={data?.image_url} alt="product image" />
            <div>
              <SingleProduct
                category={data?.category}
                name={data?.name}
                price_in_cents={data?.price_in_cents}
                description={data?.description}
              />
              <BuyButton />
            </div>
          </section>
        </ProductContainer>
      </Container>
    </section>
  );
}
