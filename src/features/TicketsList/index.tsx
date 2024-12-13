import { Ticket } from '@/utils/types'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'

import s from './Ticket.module.scss'

type Props = {
  tickets: Ticket[]
}
export const TicketsList = ({ tickets }: Props) => {
  console.log('tickets', tickets)

  return (
    <>
      {tickets.map((ticket, idx) => {
        return (
          <Grid
            className={s.ticket}
            container
            key={`${ticket.origin}-${idx}`}
            size={12}
            spacing={3}
          >
            <Grid className={s.priceBlock} size={4}>
              <Button className={s.butBtn} variant={'contained'}>
                <p>Купить</p>{' '}
                <p className={s.price}>
                  за {ticket.price} <CurrencyRubleIcon className={s.rubleIcon} />
                </p>
              </Button>
            </Grid>
            <Grid className={s.infoBlock} size={8}>
              Info
            </Grid>
          </Grid>
        )
      })}
    </>
  )
}
