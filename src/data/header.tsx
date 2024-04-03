import { Link } from "react-router-dom";

import { HiPhone } from "react-icons/hi2";

import { HeaderInfo } from "../models/data";

export const HEADER: HeaderInfo = {
  LOGO: (
    <Link to='/'>
      <img src="/assets/images/logo/Logo.svg" alt="Logo Rimac" />
    </Link>
  ),
  MENU: {
    TEXT: '¡Compra por este medio!',
    PHONE: {
      ICON: <HiPhone />,
      PREFIX: '01',
      NUMBER: '411 6001',
    },
  }
}