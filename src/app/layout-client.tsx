"use client";

import { Provider } from "react-redux";
import { Header } from "./components/organisms/header";
import { FilterContextProvider } from "./context/filter-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { store, persistor } from "@/hooks/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

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
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <FilterContextProvider>
            <Header />
            {children}
            <Toaster
              toastOptions={{
                duration: 4000,
                position: "top-center",
                success: {
                  style: {
                    border: "1px solid green",
                  },
                },
                error: {
                  style: {
                    border: "1px solid red",
                  },
                },
              }}
            />
          </FilterContextProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
