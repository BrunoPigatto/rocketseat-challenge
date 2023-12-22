export function formatPrice(valueInCents: number) {
  const valorInReal = valueInCents / 100;
  return valorInReal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
