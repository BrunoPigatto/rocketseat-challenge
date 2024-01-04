"use client";
import { gql, useQuery } from "@apollo/client";

export default function useProduct(id: string) {
  const PRODUCT_QUERY = gql`
  query {
    Product(id: "${id}") {
      name
      description
      category
      price_in_cents
      image_url
    }
  }
`;
  const { data } = useQuery(PRODUCT_QUERY, {
    variables: { productId: id },
  });

  return {
    data: data?.Product,
  };
}
