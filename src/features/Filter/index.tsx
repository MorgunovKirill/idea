import { Checkbox } from '@/components/ui'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

import s from './Filter.module.scss'

export const Filter = () => {
  const transfersChangeHandler = () => {}

  return (
    <div className={s.filter}>
      <div className={s.currencies}>
        <h2 className={s.heading}>Валюта</h2>
        <ButtonGroup
          aria-label={'Basic button group'}
          className={s.options}
          size={'large'}
          variant={'outlined'}
        >
          <Button className={s.option}>RUB</Button>
          <Button className={s.option}>USD</Button>
          <Button className={s.option}>EUR</Button>
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
