
import Styles from './Banner.module.scss'

interface Props {
    image: string
}

export const Banner = ({image}: Props) => {
  const { container } = Styles

  return (
    <div className={container} style={{backgroundImage: `url(${image})`}} />
  )
}
