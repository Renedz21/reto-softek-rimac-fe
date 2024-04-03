import { LuLoader2 } from 'react-icons/lu'
import Styles from './PrimaryButton.module.scss'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  text: string
  isLoader?: boolean
}

export const PrimaryButton = ({text = "Cotiza aquí", isLoader = false , ...props}: Props) => {
  const { container } = Styles

  return (
    <button 
      className={container} {...props}>
      { isLoader ? <LuLoader2 /> : text }
    </button>
  )
}
