import convertDate from '@/utils/convertDate'
import { stopsCountString } from '@/utils/createPluralize'
import { Ticket } from '@/utils/types'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'

import s from './InfoBlock.module.scss'

type Props = {
  ticket: Ticket
}
export const InfoBlock = ({ ticket }: Props) => {
  console.log('ticket', ticket)

  return (
    <>
      <div className={s.move}>
        <div className={s.time}>{ticket.departure_time}</div>
        <div className={s.stops}>
          <div className={s.stopsCount}>{stopsCountString(ticket.stops)}</div>
          <div className={s.bar}>
            <div className={s.line}></div>
            <ConnectingAirportsIcon />
          </div>
        </div>
        <div className={s.time}>{ticket.arrival_time}</div>
      </div>
      <div className={s.addresses}>
        <div>
          <div className={s.location}>{`${ticket.origin_name}, ${ticket.origin}`}</div>
          <div className={s.date}>{convertDate.toLocaleString(ticket.departure_date)}</div>
        </div>

        <div>
          <div className={s.location}>{`${ticket.destination_name}, ${ticket.destination}`}</div>
          <div className={s.date}>{convertDate.toLocaleString(ticket.arrival_date)}</div>
        </div>
      </div>
    </>
  )
}
