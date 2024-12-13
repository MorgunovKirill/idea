export const createPluralize = (locale: string) => {
  const rules = new Intl.PluralRules(locale)

  const pluralize = (count: number) => {
    return rules.select(count)
  }

  return pluralize
}
export const pluralizeRu = createPluralize('ru')

export const stopsCountString = (count: number) => {
  const str = pluralizeRu(count)

  switch (str) {
    case 'one':
      return `${count} пересадка`
    case 'few':
      return `${count} пересадки`
    case 'many':
      return `${count} пересадок`
  }
}
