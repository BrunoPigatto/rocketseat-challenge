import { FilterContext } from "@/app/context/filter-context";
import { useContext } from "react";

export function useFilter() {
  return useContext(FilterContext);
}
