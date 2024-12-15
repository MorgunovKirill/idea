import { Checkbox } from '@/components/ui'
import { CurrencyType } from '@/utils/utils'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import clsx from 'clsx'

import s from './Filter.module.scss'

type Props = {
  activeCurrency: string
  changeActiveCurrency: (currency: CurrencyType) => void
}

export const Filter = ({ activeCurrency, changeActiveCurrency }: Props) => {
  const transfersChangeHandler = () => {}

  return (
    <div className={s.filter}>
      <div className={s.currencies}>
        <h2 className={s.heading}>Валюта</h2>
        <ButtonGroup aria-label={'Basic button group'} className={s.options} size={'large'}>
          <Button
            className={clsx(s.option)}
            onClick={() => changeActiveCurrency(CurrencyType.rub)}
            variant={activeCurrency === CurrencyType.rub ? 'contained' : 'outlined'}
          >
            {CurrencyType.rub}
          </Button>
          <Button
            className={clsx(s.option, activeCurrency === CurrencyType.usd && s.active)}
            onClick={() => changeActiveCurrency(CurrencyType.usd)}
            variant={activeCurrency === CurrencyType.usd ? 'contained' : 'outlined'}
          >
            {CurrencyType.usd}
          </Button>
          <Button
            className={clsx(s.option, activeCurrency === CurrencyType.eur && s.active)}
            onClick={() => changeActiveCurrency(CurrencyType.eur)}
            variant={activeCurrency === CurrencyType.eur ? 'contained' : 'outlined'}
          >
            {CurrencyType.eur}
          </Button>
        </ButtonGroup>
      </div>
      <div className={s.transfers}>
        <h2 className={s.heading}>Количество пересадок</h2>
        <FormGroup>
          <FormControlLabel
            className={s.label}
            control={<Checkbox callback={transfersChangeHandler} checked={false} />}
            label={'Все'}
          />
          <FormControlLabel
            className={s.label}
            control={<Checkbox callback={transfersChangeHandler} checked={false} />}
            label={'Без пересадок'}
          />
          <FormControlLabel
            className={s.label}
            control={<Checkbox callback={transfersChangeHandler} checked />}
            label={'1 пересадка'}
          />
          <FormControlLabel
            className={s.label}
            control={<Checkbox callback={transfersChangeHandler} checked={false} />}
            label={'2 пересадки'}
          />
          <FormControlLabel
            className={s.label}
            control={<Checkbox callback={transfersChangeHandler} checked={false} />}
            label={'3 пересадки'}
          />
        </FormGroup>
      </div>
    </div>
  )
}
