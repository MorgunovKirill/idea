import { StopsType } from '@/app/ui/App'
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
  changePickedStopsCountHandler: (option: string, newValue: boolean) => void
  pickSpecificStopsCountHandler: (option: string) => void
  pickedStopsCount: Record<string, StopsType>
}

export const Filter = ({
  activeCurrency,
  changeActiveCurrency,
  changePickedStopsCountHandler,
  pickSpecificStopsCountHandler,
  pickedStopsCount,
}: Props) => {
  const allOptionsPicked = Object.values(pickedStopsCount).every(item => {
    return item.value
  })

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
            control={
              <Checkbox
                callback={() => {
                  changeAllOptions(allOptionsPicked)
                }}
                checked={allOptionsPicked}
                option={'all'}
              />
            }
            label={'Все'}
          />
          {Object.entries(pickedStopsCount).map(([key, value]) => (
            <div className={s.labelBlock}>
              <FormControlLabel
                className={s.label}
                control={
                  <Checkbox
                    callback={changePickedStopsCountHandler}
                    checked={value.value}
                    option={key}
                  />
                }
                key={key}
                label={value.label}
              />
              <Button onClick={() => pickSpecificStopsCountHandler(key)}>Только</Button>
            </div>
          ))}
        </FormGroup>
      </div>
    </div>
  )
}
