import { useEffect, useState } from 'react'

import { Filter } from '@/features/Filter'
import { TicketsList } from '@/features/TicketsList'
import { Ticket } from '@/utils/types'
import { CurrencyType } from '@/utils/utils'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'

import s from './App.module.scss'

import ticketsData from '../../data/tickets.json'

export type StopsType = {
  label: string
  value: boolean
}

export function App() {
  const tickets: Ticket[] = ticketsData.tickets
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>(tickets)
  const [activeCurrency, changeActiveCurrency] = useState<CurrencyType>(CurrencyType.rub)
  const [pickedStopsCount, changePickedStopsCount] = useState<Record<string, StopsType>>({
    '0': {
      label: 'Без пересадок',
      value: true,
    },
    '1': {
      label: '1 пересадка',
      value: true,
    },
    '2': {
      label: '2 пересадки',
      value: true,
    },
    '3': {
      label: '3 пересадки',
      value: true,
    },
  })

  const changePickedStopsCountHandler = (option: string, newValue: boolean) => {
    changePickedStopsCount(prevState => ({
      ...prevState,
      [option]: { ...prevState[option], value: newValue },
    }))
  }

  const changeAllStopsCountHandler = (allOptionsPicked: boolean) => {
    changePickedStopsCount(prevState => {
      const newState = { ...prevState }

      for (const key of Object.keys(newState)) {
        newState[key].value = !allOptionsPicked
      }

      return newState
    })
  }

  const pickSpecificStopsCountHandler = (option: string) => {
    changePickedStopsCount(prevState => {
      const newState = { ...prevState }

      for (const key of Object.keys(newState)) {
        newState[key].value = key === option
      }

      return newState
    })
  }

  useEffect(() => {
    const stops: number[] = []

    for (const [key, value] of Object.entries(pickedStopsCount)) {
      if (value.value) {
        stops.push(+key)
      }
    }

    const filtered = [...tickets].filter(ticket => {
      return stops.includes(ticket.stops)
    })

    setFilteredTickets(filtered)
  }, [pickedStopsCount])

  return (
    <Container className={s.layout} fixed>
      <div className={s.grid}>
        <h1 className={s.title}>Tickets</h1>
        <Grid className={s.container} container spacing={5}>
          <Grid size={4}>
            <Filter
              activeCurrency={activeCurrency}
              changeActiveCurrency={changeActiveCurrency}
              changeAllStopsCountHandler={changeAllStopsCountHandler}
              changePickedStopsCountHandler={changePickedStopsCountHandler}
              pickSpecificStopsCountHandler={pickSpecificStopsCountHandler}
              pickedStopsCount={pickedStopsCount}
            />
          </Grid>
          <Grid className={s.list} container size={8}>
            {filteredTickets.length ? (
              <TicketsList activeCurrency={activeCurrency} tickets={filteredTickets} />
            ) : (
              <h2>Попробуйте поменять условия поиска...</h2>
            )}
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
