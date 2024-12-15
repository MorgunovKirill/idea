import { useState } from 'react'

import { Filter } from '@/features/Filter'
import { TicketsList } from '@/features/TicketsList'
import { Ticket } from '@/utils/types'
import { CurrencyType } from '@/utils/utils'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'

import s from './App.module.scss'

import ticketsData from '../../data/tickets.json'

export function App() {
  const tickets: Ticket[] = ticketsData.tickets
  const [activeCurrency, changeActiveCurrency] = useState<CurrencyType>('RUB')

  return (
    <Container className={s.layout} fixed>
      <div className={s.grid}>
        <h1 className={s.title}>Tickets</h1>
        <Grid className={s.container} container spacing={5}>
          <Grid size={4}>
            <Filter activeCurrency={activeCurrency} changeActiveCurrency={changeActiveCurrency} />
          </Grid>
          <Grid container size={8}>
            <TicketsList activeCurrency={activeCurrency} tickets={tickets} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
