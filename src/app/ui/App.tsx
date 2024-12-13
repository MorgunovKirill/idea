import { Filter } from '@/features/Filter'
import { TicketsList } from '@/features/TicketsList'
import { Ticket } from '@/utils/types'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'

import s from './App.module.scss'

import ticketsData from '../../data/tickets.json'

export function App() {
  const tickets: Ticket[] = ticketsData.tickets

  return (
    <Container className={s.layout} fixed>
      <div className={s.grid}>
        <h1 className={s.title}>Tickets</h1>
        <Grid className={s.container} container spacing={5}>
          <Grid size={4}>
            <Filter />
          </Grid>
          <Grid container size={8}>
            <TicketsList tickets={tickets} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
