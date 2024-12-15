export type Nullable<T> = T | null

export enum CurrencyType {
  eur = 'EUR',
  rub = 'RUB',
  usd = 'USD',
}
export const convertCurrency = (amountInRub: number, currency: CurrencyType) => {
  switch (currency) {
    case CurrencyType.usd:
      return (amountInRub / 103.5).toFixed(2)
    case CurrencyType.eur:
      return (amountInRub / 108.5).toFixed(2)
    case CurrencyType.rub:
      return amountInRub
    default:
      return amountInRub
  }
}
