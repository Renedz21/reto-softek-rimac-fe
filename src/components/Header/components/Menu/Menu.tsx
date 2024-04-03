
import Styles from './Menu.module.scss'

import { HEADER } from '../../../../data/header'

export const Menu = () => {
  const { containerMenu } = Styles
  const { MENU } = HEADER

  return (
    <ul className={containerMenu}>
      <li>
        <p>{HEADER.MENU.TEXT}</p>
      </li>
      <li>
        <a href={`tel:${MENU.PHONE.PREFIX + MENU.PHONE.NUMBER}`}> 
          {MENU.PHONE.ICON}
          ({MENU.PHONE.PREFIX}) {MENU.PHONE.NUMBER}
        </a>
      </li>
    </ul>
  )
}
