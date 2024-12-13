export type Nullable<T> = T | null

type CurrencyType = 'EUR' | 'RUB' | 'USD'
export const convertCurrency = (amountInRub: number, currency: CurrencyType) => {
  switch (currency) {
    case 'RUB':
      return amountInRub
    default:
      return amountInRub
  }
}
