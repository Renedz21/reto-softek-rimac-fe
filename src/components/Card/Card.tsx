import React from 'react'

import Styles from './Card.module.scss'

interface Props {
  children: React.ReactNode
}

export const Card = ({children}: Props) => {
  const { container } = Styles

  return (
    <div className={container}>
      {children}
    </div>
  )
}
