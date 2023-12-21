import { ProductsFetchResponse, Product } from "@/app/types/products";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = async (): Promise<Product[]> => {
  const response: AxiosResponse<ProductsFetchResponse> = await axios.post(
    API_URL,
    {
      query: `
      query {
        allProducts {
          id
          name
          price_in_cents
        }
      }
    `,
    }
  );

  return response.data.data.allProducts;
};

export function useProducts() {
  const { data } = useQuery<Product[]>("products", fetcher);

  return {
    data: data,
  };
}
