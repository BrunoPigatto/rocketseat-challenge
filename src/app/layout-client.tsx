"use client";

import { Header } from "./components/organisms/header";
import { FilterContextProvider } from "./context/filter-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <FilterContextProvider>
        <Header />
        {children}
      </FilterContextProvider>
    </ApolloProvider>
  );
}
