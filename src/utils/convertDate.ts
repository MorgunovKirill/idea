const convertDate = {
  toLocaleString(date: string) {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      weekday: 'short',
      year: 'numeric',
    }

    return new Date(date).toLocaleDateString('ru-RU', options)
  },
}

export default convertDate
