
import Styles from './Progress.module.scss'

interface Props {
  width: number
}

export const Progress = ({width = 0}: Props) => {
  const { container } = Styles

  return (
    <span className={container}>
      <span style={{width: `${width}%`}} />
    </span>
  )
}
