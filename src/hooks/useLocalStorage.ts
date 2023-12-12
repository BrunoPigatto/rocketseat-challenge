import { useState } from "react";

export function useLocalStorage<T>(item: string) {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const storedItem = isLocalStorageAvailable
    ? localStorage.getItem(item)
    : null;
  const [value, setValue] = useState(storedItem ? JSON.parse(storedItem) : "");

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
