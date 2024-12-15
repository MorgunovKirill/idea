import { useState } from 'react'

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
  const [activeCurrency, changeActiveCurrency] = useState<CurrencyType>(CurrencyType.rub)
  const [pickedStopsCount, changePickedStopsCount] = useState<Record<string, StopsType>>({
    '0': {
      label: 'Без пересадок',
      value: false,
    },
    '1': {
      label: '1 пересадка',
      value: false,
    },
    '2': {
      label: '2 пересадки',
      value: false,
    },
    '3': {
      label: '3 пересадки',
      value: false,
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
        if (allOptionsPicked) {
          newState[key].value = false
        } else {
          newState[key].value = true
        }
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
          <Grid container size={8}>
            <TicketsList activeCurrency={activeCurrency} tickets={tickets} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
