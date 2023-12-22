import { ProductsFetchResponse } from "@/app/types/products";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = async (): Promise<ProductsFetchResponse> => {
  const response: AxiosResponse = await axios.post(API_URL, {
    query: `
      query {
        allProducts {
          id
          name
          price_in_cents
          image_url
        }
      }
    `,
  });

  return response?.data?.data;
};

export function useProducts() {
  const { data } = useQuery("products", fetcher);
  return {
    data: data,
  };
}
