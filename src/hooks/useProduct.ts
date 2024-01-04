"use client";
import { gql, useQuery } from "@apollo/client";

const PRODUCT_QUERY = gql`
  query {
    Product(productId: $productId) {
      name
      description
      category
      price_in_cents
      image_url
    }
  }
`;

export default function useProduct(id: string) {
  const { data } = useQuery(PRODUCT_QUERY, {
    variables: { productId: id },
    skip: !id,
  });

  return {
    data: data,
  };
}
