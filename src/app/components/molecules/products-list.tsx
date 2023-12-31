"use client";

import useProducts from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import styled from "styled-components";
import { Product } from "@/app/types/products";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  justify-content: center;
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;
`;

export function ProductsList() {
  const { data } = useProducts();
  return (
    <ListContainer>
      {data?.map((product: Product) => (
        <ProductCard
          key={product?.id}
          image={product?.image_url as string}
          title={product?.name}
          price={product?.price_in_cents}
          id={product?.id as string}
        />
      ))}
    </ListContainer>
  );
}
