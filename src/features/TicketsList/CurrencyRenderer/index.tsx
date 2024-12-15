import { CurrencyType } from '@/utils/utils'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import EuroIcon from '@mui/icons-material/Euro'

type CurrencyProps = {
  type: CurrencyType
}

const CurrencyIcon = {
  [CurrencyType.eur]: EuroIcon,
  [CurrencyType.rub]: CurrencyRubleIcon,
  [CurrencyType.usd]: AttachMoneyIcon,
}

export const CurrencyRenderer = ({ type }: CurrencyProps) => {
  const Icon = CurrencyIcon[type]

  return Icon ? <Icon /> : <span>Unknown Currency</span>
}
