import { CurrencyRenderer } from '@/features/TicketsList/CurrencyRenderer'
import { InfoBlock } from '@/features/TicketsList/InfoBlock'
import { Ticket } from '@/utils/types'
import { CurrencyType, convertCurrency } from '@/utils/utils'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'

import s from './Ticket.module.scss'

type Props = {
  activeCurrency: CurrencyType
  tickets: Ticket[]
}

export const TicketsList = ({ activeCurrency, tickets }: Props) => {
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
              <div className={s.logoBlock}>
                <img alt={'logo'} src={`img/${ticket.carrier.toLowerCase()}_logo.png`} />
              </div>
              <Button className={s.butBtn} variant={'contained'}>
                <p>Купить</p>{' '}
                <p className={s.price}>
                  за {convertCurrency(ticket.price, activeCurrency)}
                  <span className={s.currencyIcon}>
                    <CurrencyRenderer type={activeCurrency} />
                  </span>
                </p>
              </Button>
            </Grid>
            <Grid className={s.infoBlock} size={8}>
              <InfoBlock ticket={ticket} />
            </Grid>
          </Grid>
        )
      })}
    </>
  )
}
