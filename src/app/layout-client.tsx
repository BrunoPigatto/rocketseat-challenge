"use client";

import { Provider } from "react-redux";
import { Header } from "./components/organisms/header";
import { FilterContextProvider } from "./context/filter-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import store from "@/hooks/redux/store";

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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </ApolloProvider>
    </Provider>
  );
}
