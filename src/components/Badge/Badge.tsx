
import Styles from './Badge.module.scss'

interface Props {
    text: string
}

export const Badge = ({text}: Props) => {
  const { container } = Styles

  return (
    <span className={container}>
      {text}
    </span>
  )
}
