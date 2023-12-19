"use client";

import { ReactNode, createContext, useState } from "react";
import { FilterType } from "../types/filter-types";
import { PriorityTypes } from "../types/priority-types";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<FilterType>(FilterType.ALL);
  const [priority, setPriority] = useState<PriorityTypes>(PriorityTypes.NEWS);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
