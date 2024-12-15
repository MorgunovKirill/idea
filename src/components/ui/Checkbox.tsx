import { ChangeEvent } from 'react'

import CheckboxMUI from '@mui/material/Checkbox'

type CheckboxProps = {
  callback: (option: string, checked: boolean) => void
  checked: boolean
  option: string
}

export const Checkbox = ({ callback, checked, option }: CheckboxProps) => {
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    callback(option, evt.currentTarget.checked)
  }

  return <CheckboxMUI checked={checked} onChange={changeHandler} />
}
