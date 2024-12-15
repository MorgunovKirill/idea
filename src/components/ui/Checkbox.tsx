import { ChangeEvent } from 'react'

import CheckboxMUI from '@mui/material/Checkbox'

type CheckboxProps = {
  callback: (checked: boolean) => void
  checked: boolean
}

export const Checkbox = ({ callback, checked }: CheckboxProps) => {
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    callback(evt.currentTarget.checked)
  }

  return <CheckboxMUI checked={checked} onChange={changeHandler} />
}
