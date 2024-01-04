import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";
import { useQuery } from "@apollo/client";
import { getCategoryByType, getFieldByPriority } from "@/utils/api-filters";
import { gql } from "@apollo/client";

export default function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);

  const sortSettings = getFieldByPriority(priority);
  const category = getCategoryByType(type);
  const filterCondition = category ? `filter: { category: "${category}"}` : "";

  const ALL_PRODUCTS_QUERY = gql`
    query {
      allProducts(${filterCondition}, sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
        id
        name
        price_in_cents
        image_url
        category
      }
    }
  `;

  const { data } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: { type, priority },
  });

  const products = data?.allProducts;
  const filteredProducts = products?.filter((product: { name: string }) =>
    product?.name
      ?.toLocaleLowerCase()
      .includes(searchDeferred.toLocaleLowerCase())
  );

  return {
    data: filteredProducts,
  };
}
