const convertDate = {
  parseDate(date: string) {
    return this.toLocaleString(this.parseRussianDateFormat(date))
  },

  parseRussianDateFormat(dateString: string): Date | null {
    const dateRegex = /^\d{2}\.\d{2}\.\d{2}$/

    if (!dateRegex.test(dateString)) {
      console.error('Invalid date format')

      return null
    }

    const [day, month, year] = dateString.split('.').map(Number)

    const fullYear = year < 50 ? 2000 + year : 1900 + year

    const date = new Date(fullYear, month - 1, day)

    return isNaN(date.getTime()) ? null : date
  },

  toLocaleString(date: Date | null) {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      weekday: 'short',
      year: 'numeric',
    }

    return date?.toLocaleDateString('ru-RU', options)
  },
}

export default convertDate
