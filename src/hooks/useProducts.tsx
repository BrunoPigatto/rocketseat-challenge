import { ProductsFetchResponse } from "@/app/types/products";
import axios from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { FilterType } from "@/app/types/filter-types";
import { getCategoryByType, getFieldByPriority } from "@/utils/API-filters";
import { PriorityTypes } from "@/app/types/priority-types";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = async (query: string): Promise<ProductsFetchResponse> => {
  try {
    const response = await axios.post(API_URL, { query });
    return response?.data?.data;
  } catch (error) {
    throw new Error("Ocorreu um erro ao buscar os produtos");
  }
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  console.log({ search });
  console.log({ searchDeferred });
  const query = filterQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
  });
  const products = data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product?.name
      ?.toLocaleLowerCase()
      .includes(searchDeferred.toLocaleLowerCase())
  );

  return {
    data: filteredProducts,
  };
}

const filterQuery = (type: FilterType, priority: PriorityTypes) => {
  if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY) {
    return `
      query {
        allProducts(sortField: "sales", sortOrder: "DESC") {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `;
  }
  const sortSettings = getFieldByPriority(priority);
  const category = getCategoryByType(type);
  const filterCondition = category ? `filter: { category: "${category}"}` : "";
  return `
  query {
    allProducts(${filterCondition}, sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}" ) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
`;
};
